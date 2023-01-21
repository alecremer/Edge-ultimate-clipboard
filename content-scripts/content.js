// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     $("body").prepend(`<p>AAAAAAAAAAAAAAAAAAAA</p>`)
//     $("body").prepend(
//         `<div class="container" style="background-color: aqua;">
//             <div style="flex-grow: 7;" class="text-container">
//                 <p class="">some text</p>
//             </div>
//             <button style="flex-grow: 1;">copy</button>
//             <button style="flex-grow: 1;">remove</button>
//         </div>`
//     );
//     $("#containers-area").prepend(
//         `<div class="container" style="background-color: aqua;">
//             <div style="flex-grow: 7;" class="text-container">
//                 <p class="">some text</p>
//             </div>
//             <button style="flex-grow: 1;">copy</button>
//             <button style="flex-grow: 1;">remove</button>
//         </div>`
//     );
//     $("head").prepend(
//         `<style>
//           .slide-image {
//               height: auto;
//               width: 100vw;
//           }
//         </style>`
//     );
//     $(`#${request.imageDivId}`).click(function() {
//         $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
//     });
//     sendResponse({ fromcontent: "This message is from content.js" });
// });