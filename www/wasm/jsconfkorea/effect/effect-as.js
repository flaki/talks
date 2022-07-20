const DW = 1920 / 2
const DH = 1080 / 2

const testimages = ['nuka-jsconf.svg', 'welcome2.svg', 'simple.svg', 'rome.svg', 'pip-ts.svg', 'act3.png', 'disclaimer.png', 'whatis.svg']

window.present = async function (slide) {
    slide = slide || document.querySelector('main>section:first-of-type')

    await run(
        async function (renderContext) {
            // Store render context
            window.renderContext = renderContext

            return showSlide(slide)
        }, 'fullscreen')
}

window.nextSlide = async function () {
    window.currentSlide = (window.currentSlide || 1) + 1
    const slides = Array.from(document.querySelectorAll('main>section')).length
    if (window.currentSlide > slides) window.currentSlide = slides

    const slide = document.querySelector(`main>section:nth-of-type(${window.currentSlide})`)
    window.showSlide(slide)
}
window.prevSlide = async function () {
    window.currentSlide = (window.currentSlide || 1) - 1
    if (window.currentSlide < 1) window.currentSlide = 1

    const slide = document.querySelector(`main>section:nth-of-type(${window.currentSlide})`)
    window.showSlide(slide)
}

window.showSlide = async function (slide) {
    const img = slide.querySelector('img')
    const heading = slide.querySelector('h2,h3,h4')

    const image = img ? { im: await load(img.src) } : {}
    const title = heading ? heading.textContent.trim() : ''
    const titlesize = heading ? heading.tagName[1] | 0 : 2

    const effect = slide.classList.contains('no-effect') ? 'none' : 'default'

    updateNotes(slide)

    drawSlide({
        image, title, titlesize, effect
    }, window.renderContext)
}

function updateNotes(next) {
    next = next

    let detailsElement = next.querySelector('.notes')
    let noteContents = detailsElement ? detailsElement.innerHTML : '-'
    noteContents = noteContents.replace(/\n\s*/g, '</p><p>')

    if (window.notesWindow) {
        const b = notesWindow.document.body

        if (!b.children.length) {
            b.innerHTML = `<div style="font-size: 1.9rem; line-height: 2.6rem; padding: 0 20vmin;">
      </div><iframe src="${window.location.href}" style="opacity: 0.0; position: absolute; bottom: 10px; right: 10px;" width="800" height="450">
      </iframe>`
        }

        setTimeout(() => {
            b.firstElementChild.innerHTML = `<p>${noteContents}</p>`
            b.lastElementChild.contentWindow.Slides.goToPage(window.currentSlide)
        }, 100)
    }
}

document.body.addEventListener('keydown', e => {
    if (e.key === 'Enter') window.present()
    if (e.key === 'ArrowRight') window.nextSlide()
    if (e.key === 'ArrowLeft') window.prevSlide()

    // Open speaker notes window
    if (e.key === 'n') window.notesWindow = window.open('about:blank');
})

window.demo = function () {
    console.log('demo running')
    run(
        async function (renderContext) {
            console.log('slide rendering')
            return drawSlide({
                image: { im: await load('../assets/' + testimages[Math.random() * testimages.length | 0]) },
                title: "Welcome to Vault 6D-73-61!",
                titlesize: 2
            }, renderContext)
        })
}


async function load(isrc) {
    console.log('loading', isrc)

    //const displayfont = '/font/web/DataControl.woff'
    //await new FontFace('DataControl', `url(${displayfont})`);

    let im = document.createElement('img')

    imready = new Promise((resolve, reject) => {
        function loaded() {
            resolve(im)
        }
        im.addEventListener('load', loaded)
    })

    im.src = isrc
    await imready

    let ow = im.width
    let oh = im.height
    im.width = DW
    im.height = oh / ow * im.width
    console.log('image loaded', im)

    return im
}


async function drawSlide(descriptor, ctx) {
    ctx.clearRect(0, 0, DW, DH)
    console.log(descriptor, ctx.canvas)

    ctx.effect = descriptor.effect || 'default'

    const im = descriptor.image.im
    if (ctx.effect === 'default') ctx.drawImage(im, 0, 20, DW, im.height)
    if (ctx.effect === 'none') ctx.drawImage(im, 0, 0, im.width, im.height)

    const size = descriptor.titlesize || 2
    ctx.font = (20 + (4 - size) * 8) + 'px "DataControl"'
    console.log(ctx.font)
    ctx.textAlign = 'center'
    ctx.textBaseline = 'bottom'
    ctx.fillStyle = 'white'

    const title = descriptor.title.replace(/\n/g, ' | ').replace(/\s+/g, '\t').trim()
    ctx.fillText(title, DW / 2, DH - 20)

    // update WebAssembly render memory with the new image
    if (window.wasmRenderMemory) {
      const mem = window.wasmRenderMemory()
      mem.set(renderContext.getImageData(0,0,DW,DH).data)
    }
}

async function run(slideprovider, fullscreen) {
    // prepare full-screen canvas
    const displayCanvas = document.createElement('canvas')
    displayCanvas.width = DW
    displayCanvas.height = DH
    const displayContext = displayCanvas.getContext('2d')

    document.body.appendChild(displayCanvas)

    if (fullscreen) {
        // try to go fullscreen
        try {
            if (!document.fullscreenElement) {
                await displayCanvas.requestFullscreen()
            }
        }
        catch (e) {
          console.log('Failed to go fullscreen: ', e)
          displayCanvas.style = "position: absolute; z-index: 100; top:0;left:0;width:100vw;height:56.25vw;"
        }
    }

    //import the render function
    let render
    let renderMemPtr
    let instancememory

    try {
        const wasm = await WebAssembly.instantiateStreaming(fetch("./effect/effect-as.wasm"), {
            main: {},
            env: {
                rendererInputData(ptr, length) {
                  renderMemPtr = ptr
                  window.wasmRenderMemory = () => new Uint8Array(instancememory.buffer, renderMemPtr, DW*DH*4);
                },
                abort(_msg, _file, line, column) {
                    console.error("abort called at main.ts:" + line + ":" + column);
                }
            },
        })

        instancememory = wasm.instance.exports.memory;

        wasm.instance.exports.initSrcData(DW,DH)

        render = wasm.instance.exports.render;
    }
    catch(e) {
        console.error(e)
    }


    // Prepare render canvas
    const renderCanvas = document.createElement('canvas')
    renderCanvas.width = DW
    renderCanvas.height = DH
    const renderContext = renderCanvas.getContext('2d')


    await slideprovider(renderContext)

    //let srcData = renderContext.getImageData(0, 0, DW, DH)
    //srcData.data is automatically moved into wasm's context on every update

    let outData = displayContext.createImageData(DW, DH)

    let frame = 0
    let show = () => {
        // Render default effect
        displayCanvas.className = `${renderContext.effect}-effect`
        if (renderContext.effect === 'default') {
            //render(srcData.data, outData.data, frame, Math.floor(Math.random() * 100))
            const outptr = render(frame,0);
            //const outptr = render(frame, Math.floor(Math.random() * 100));
            const outDataArray = new Uint8Array(instancememory.buffer, outptr, DW*DH*4)

            //create outData from the returned instance memory
            outData.data.set(outDataArray) // TODO: avoid copying just use the wasm memory as buffer

            //displayContext.clearRect(0, 0, DW, DH)
            displayCanvas.width = displayCanvas.width
            displayContext.putImageData(outData, 0, 0)

        // Render with effects turned off
        } else {
            displayContext.fillColor="red"
            displayContext.fillRect(0, 0, DW, DH)
            displayContext.clearRect(0, 0, DW, DH)
            displayContext.drawImage(renderCanvas, 0, 0)
        }

        frame++
        requestAnimationFrame(show)
    }

    show()
}
