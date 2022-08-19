import * as React from "react";


export const lightLike = "M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
export const solidLike = "M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"

export const lightDislike = "M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
export const solidDislike = "M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"

// const ClickedLike = ({setLikeNum, like, likeNum}) => (
//   <svg
//     viewBox="0 0 24 24"
//     preserveAspectRatio="xMidYMid meet"
//     focusable="false"
//     className="style-scope yt-icon"
//     style={{
//       pointerEvents: "none",
//       display: "block",
//       width: "24px",
//       height: "24px",
//     }}
//     onClick={editLike(setLikeNum, like, likeNum)}
//   >
//     <g className="style-scope yt-icon">
//     <path
//         d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"
//         className="style-scope yt-icon"
//       />
//       </g>
//   </svg>
// );

// export const UnclickedLike = () => (
//     <svg
//       viewBox="0 0 16 16"
//       preserveAspectRatio="xMidYMid meet"
//       focusable="false"
//       className="style-scope yt-icon"
//       style={{
//         pointerEvents: "none",
//         display: "block",
//         width: "16px",
//         height: "16px",
//       }}
//     >
//       <g className="style-scope yt-icon">
//       <path
//         d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
//         className="style-scope yt-icon"
//       />
//       </g>
//     </svg>
// );

//  const ClickedDislike = ({clickDislike, setClickDislike}) => (
//   <svg
//     viewBox="0 0 24 24"
//     preserveAspectRatio="xMidYMid meet"
//     focusable="false"
//     className="style-scope yt-icon"
//     style={{
//       pointerEvents: "none",
//       display: "block",
//       width: "24px",
//       height: "24px",
//     }}
//     onClick={editDislike(clickDislike, setClickDislike)}
//   >
//     <g className="style-scope yt-icon">
//     <path
//         d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"
//         className="style-scope yt-icon"
//       />
//     </g>
//   </svg>
// );


//  export const UnclickedDislike = () => (
//   <svg
//     viewBox="0 0 16 16"
//     preserveAspectRatio="xMidYMid meet"
//     focusable="false"
//     className="style-scope yt-icon"
//     style={{
//       pointerEvents: "none",
//       display: "block",
//       width: "16px",
//       height: "16px",
//     }}
//   >
//     <g className="style-scope yt-icon">
//     <path
//         d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
//         className="style-scope yt-icon"
//       />
//     </g>
//   </svg>
// );



export const ShareIcon = () => (
  <>
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      id='svg'
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
      }}
    >
      <g >
        <path
          d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"
        />
        
      </g>
    </svg>
    <span className="ps-1 lh-sm pe-3 iconFont "> SHARE</span>

  </>
);

export const Download = () => (
  <>
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
      }}

    >
      <g className="style-scope yt-icon">
        <path
          d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
    <span className="ps-1 lh-sm pe-3 iconFont "> DOWNLOAD</span>
  </>
);

export const Clip = () => (
  <>
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
      }}

    >
      <g className="style-scope yt-icon">
        <path
          d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
    <span className="ps-1 lh-sm pe-3 iconFont "> CLIP</span>
  </>
);

export const Save = () => (
  <>
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
      }}

    >
      <g className="style-scope yt-icon">
        <path
          d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
    <span className="ps-1 lh-sm pe-3 iconFont "> SAVE</span>
  </>
);

export const LittleLike = () => (
  <svg
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    className="style-scope yt-icon"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "16px",
      height: "16px",
    }}
  >
    <g className="style-scope yt-icon">
      <path
        d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z"
        className="style-scope yt-icon"
      />
    </g>
  </svg>
);

export const LittleUnlike = () => (
  <svg
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    className="style-scope yt-icon"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "16px",
      height: "16px",
    }}
  >
    <g className="style-scope yt-icon">
      <path
        d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z"
        className="style-scope yt-icon"
      />
    </g>
  </svg>
);

export const Sort = (props) => (
  <>
  <div className="d-flex">
   <span className='commentsFirst me-3'>385 Comments</span> 
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
      }}
      {...props}
    >
      <g className="style-scope yt-icon">
        <path
          d="M21,6.99H3V5h18V6.99z M15,11H3v1.99h12V11z M9,17H3v1.99h6V17z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
    <span className='commentsFirst ms-1'>SORT BY</span>
    </div>
  </>
);


// const click =()=>{
//   console.log("xixi");
// }

// window.addEventListener('load', function () {
//   const svgElement = document.getElementById('svg');
//   console.log(svgElement);
//   svgElement.addEventListener('click', click, false);

// });


