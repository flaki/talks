var renderSource: Uint8Array, renderResult: Uint8Array;
var DW: i32, DH: i32;

@external("env", "rendererInputData")
declare function rendererInputData(pointer: usize, length: i32): void;


export function initSrcData(width: i32, height: i32): ArrayBuffer {
    DW = width
    DH = height

    renderSource = new Uint8Array(DW * DH * 4);
    renderResult = new Uint8Array(DW * DH * 4);

    rendererInputData(renderSource.buffer as usize, renderSource.buffer.byteLength);

    return renderSource.buffer;
}


export function render(fr: i32, rnd: i32): ArrayBuffer {
    // TODO: improve perf by operating on Uint32-s instead
    const id = renderSource;
    const od = renderResult;

    /*
    //minimal scanlines
    let i = 0;
    while ( i < od.length ) {
      od[i] = (i/DW/4%2) ? renderSource[i] : 0;
      ++i;
    }
    */

    for (let y = 0; y < DH; ++y) {
      let is_scanline:boolean = y % 2 ? true : false;

      for (let x = 0; x < DW; ++x) {
        let pixelOffset:i32 = 4*(x+y*DW);

        // bleed into scanlines from above
        if (is_scanline && y>0) {
          let pixelAbove:i32 = pixelOffset-4*DW;

          // if green channel exists
          if (od[pixelAbove+1] > 0) {
            od[pixelOffset]   = od[pixelAbove];
            od[pixelOffset+1] = od[pixelAbove+1];
            od[pixelOffset+2] = od[pixelAbove+2];

            // bleed intensity
            let bleedIntensity:i32 = 0;
            bleedIntensity += od[pixelAbove];
            bleedIntensity += od[pixelAbove+1];
            bleedIntensity += od[pixelAbove+2];
            bleedIntensity = bleedIntensity / 4; // 75% of the average of 3
            od[pixelOffset+3] = bleedIntensity;
          } else {
            od[pixelOffset]   = 0;
            od[pixelOffset+1] = 0;
            od[pixelOffset+2] = 0;
            od[pixelOffset+3] = 0;
          }
        } else {
          // lightness
          let pixelValue:i32 = 0;
          pixelValue += id[pixelOffset];
          pixelValue += id[pixelOffset+1];
          pixelValue += id[pixelOffset+2];
          pixelValue /= 3;

          // cutoff
          // TODO: use bitwise ops
          if (pixelValue < 170) {
            pixelValue = 0;
          } else {
            pixelValue = 255;
          }

          od[pixelOffset] = od[pixelOffset+1] = od[pixelOffset+2] = pixelValue;
          od[pixelOffset+3] = 255;
        }
      }

      // bleed effect
      let phase = 0
      for (let x = 2; x < DW-2; ++x) {
        let pixelOffset = 4*(x+y*DW)

        if (phase === 0) {
          // unlit pixels, found a lit pixel, add orange/red shift
          if (od[pixelOffset]) {
            // prev pixel's blues diminished, will be yellow
            od[pixelOffset-4+0] = od[pixelOffset+0];
            od[pixelOffset-4+1] = od[pixelOffset+1];
            od[pixelOffset-4+2] = od[pixelOffset+2]/4;
            od[pixelOffset-4+3] = 192;

            // even further away orange falloff
            if (!od[pixelOffset-8]) {
              od[pixelOffset-8+0] = od[pixelOffset+0];
              od[pixelOffset-8+1] = od[pixelOffset+1]/2;
              od[pixelOffset-8+2] = od[pixelOffset+2]/8;
              od[pixelOffset-8+3] = 192
            }
            phase = 1
          }
        } else if (phase === 1) {
          //consecutive lit pixels, found unlit pixel, add falloff
          if (!od[pixelOffset]) {
            // current pixel's blues & reds diminished, will be green
            od[pixelOffset+0] = od[pixelOffset-4+0]/8;
            od[pixelOffset+1] = od[pixelOffset-4+1];
            od[pixelOffset+2] = od[pixelOffset-4+2]/8;
            od[pixelOffset+3] = 192;

            // even further away faint green
            if (!od[pixelOffset+4]) {
              od[pixelOffset+4+0] = od[pixelOffset-4+0]/32;
              od[pixelOffset+4+1] = od[pixelOffset-4+1]/3;
              od[pixelOffset+4+2] = od[pixelOffset-4+2]/32;
              od[pixelOffset+4+3] = 255;
            }
            phase = 0
          }
        }
      }

      // sync issue visualization
      if (y>2 && y<DH-2 && y === fr % DH) {
        // copyWithin not yet supported in AS
        // https://github.com/AssemblyScript/assemblyscript/wiki/Status-and-Roadmap#TypedArray

        //od.copyWithin(4*(y*DW - 1), 4*(y*DW+2), 4*(y+1)*DW -1)
        let vpos = 4*y*DW
        for (let pos = vpos+12; pos < vpos+4*DW; pos++) {
          od[pos-12] = od[pos]
        }

        //od.copyWithin(4*((y-2)*DW - 2), 4*((y-2)*DW+2), 4*(y-1)*DW -1)
        vpos = 4*(y-2)*DW
        for (let pos = vpos+16; pos < vpos+4*DW; pos++) {
          od[pos-16] = od[pos]
        }
      }
    }

    return renderResult.buffer;
}
