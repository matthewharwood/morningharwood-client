// import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
//
//
//
// const vertexShaderText = `
//   precision mediump float;
//
//   attribute vec2 vertPosition;
//   attribute vec3 vertColor;
//   varying vec3 fragColor;
//   void main() {
//     fragColor = vertColor;
//     gl_Position = vec4(vertPosition, 0.0, 1.0);
//   }
// `;
//
// const fragmentShaderText = `
//   precision mediump float;
//   varying vec3 fragColor;
//   void main() {
//     gl_FragColor = vec4(fragColor, 1.0);
//   }
// `;
//
// const TAG_NAMES = {
//   CANVAS: 'CANVAS'
// };
//
// @Directive({
//   selector: '[appMhCanvas]'
// })
// export class MhCanvasDirective implements OnInit{
//   private hostEl: ElementRef;
//   constructor(private elRef:ElementRef, private renderer:Renderer2) { }
//   ngOnInit() {
//     this.hostEl = MhCanvasDirective.testCanvas(this.renderer.selectRootElement(this.elRef), TAG_NAMES.CANVAS);
//     this.hostEl.nativeElement.width = window['innerWidth'];
//     this.hostEl.nativeElement.height = window['innerHeight'];
//
//     const gl = this.hostEl.nativeElement.getContext('webgl2');
//     MhCanvasDirective.testGl(gl);
//
//
//     gl.clearColor(0.72, 0.72, 0.1, 1);
//     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
//
//     // Create shaders.
//     const vertexShader = gl.createShader(gl.VERTEX_SHADER);
//     const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
//     gl.shaderSource(vertexShader, vertexShaderText);
//     gl.shaderSource(fragmentShader, fragmentShaderText);
//
//     gl.compileShader(vertexShader);
//     if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
//       console.error(gl.getShaderInfoLog(vertexShader));
//       return false;
//     }
//
//     gl.compileShader(fragmentShader);
//
//     if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
//       console.error(gl.getShaderInfoLog(fragmentShader));
//       return false;
//     }
//
//     const program = gl.createProgram();
//     gl.attachShader(program, vertexShader);
//     gl.attachShader(program, fragmentShader);
//     gl.linkProgram(program);
//
//     if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
//       console.error(gl.getProgramInfoLog(program));
//     }
//
//     gl.validateProgram(program);
//     if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
//       console.error(gl.getProgramInfoLog(program));
//     }
//
//     //
//     // create Vertices.
//     //
//     const triangleVertices = [
//       0.0, 0.5, 1.0, 1.0, 0.0,
//       -0.5, -0.5, 1.0, 0, 1.0,
//       0.5, -0.5,  0.0, 1.0, 1.0,
//     ];
//
//     const triangleVertexBufferObject = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
//     gl.bufferData(
//       gl.ARRAY_BUFFER,
//       new Float32Array(triangleVertices),
//       gl.STATIC_DRAW
//     );
//
//     // marshal js to GPU.
//
//     const positionAttrLocation = gl.getAttribLocation(program, 'vertPosition');
//     const vertColorAttrLocation = gl.getAttribLocation(program, 'vertColor');
//     gl.vertexAttribPointer(
//       positionAttrLocation, // location
//       2,
//       gl.FLOAT, // type of element
//       gl.FALSE, // is Normalized
//       5 * Float32Array.BYTES_PER_ELEMENT, // size of individual vertex
//       0 // Offset from the beginning of the single verteex of this attribute.
//     );
//
//     gl.vertexAttribPointer(
//       vertColorAttrLocation, // location
//       3,
//       gl.FLOAT, // type of element
//       gl.FALSE, // is Normalized
//       5 * Float32Array.BYTES_PER_ELEMENT, // size of individual vertex
//       2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of the single verteex of this attribute.
//     );
//
//     gl.enableVertexAttribArray(positionAttrLocation);
//     gl.enableVertexAttribArray(vertColorAttrLocation);
//
//     gl.useProgram(program);
//     gl.drawArrays(gl.TRIANGLES, 0, 3);
//   }
//
//   static testCanvas(el, name):ElementRef {
//     return el.nativeElement.nodeName !== name
//       ? console.error(`NEEDS TO BE A CANVAS, ${el}`)
//       : el;
//   }
//
//   static testGl(context) : boolean {
//     console.log( !!(context));
//     return !!(context);
//   }
// }
