import Flexbox from "./Flexbox";
import '../css/loading.css'

const Loading = () => {
    return (
        <div className="loading-page">
            <Flexbox alignItems="center" justifyContent="center" style={{ height: '100vh', background: 'white' }}>
                <div>
                    <img src="/assets/rabbit.png" alt="mercuryo" className="loading" style={{ width: '50%' }} />
                    {/* <img src="/svgs/cloud-money.svg" alt="city" className="city" style={{width: '50%'}} /> */}
                    <div className="city" style={{ width: '50%' }} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 640 630"><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M25.5 601.793h561.938"></path><path fill="#ffffff" stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M485.216 485.724h-48.675v115.894h48.675zM264.519 519.358h-48.675v82.251h48.675zM313.33 573.729h-48.675v27.88h48.675zM385.692 586.52h-48.675v15.089h48.675z"></path><path fill="#ffffff" stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M422.733 457.175v37.933a5.911 5.911 0 0 1-1.796 4.241L412 508.005a7.1 7.1 0 0 0-1.601 2.332 7.1 7.1 0 0 0-.563 2.772v88.743h36.933V440.63a2.96 2.96 0 0 0-1.772-2.724 2.965 2.965 0 0 0-3.206.531l-18.098 16.545a2.97 2.97 0 0 0-.96 2.193Z"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M469.661 486.49v115.516M434.999 445.2v156.807"></path><path fill="#ffffff" stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M544.206 529.179h-48.675v72.44h48.675z"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M529.156 529.723v72.285M504.722 534.71h-3.552a.854.854 0 0 0-.854.854v3.095c0 .472.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.095a.854.854 0 0 0-.854-.854ZM514.222 534.71h-3.552a.854.854 0 0 0-.854.854v3.095c0 .472.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.095a.854.854 0 0 0-.854-.854ZM523.732 534.71h-3.552a.854.854 0 0 0-.854.854v3.095c0 .472.382.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.095a.854.854 0 0 0-.854-.854ZM504.722 544.035h-3.552a.854.854 0 0 0-.854.854v3.096c0 .471.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM514.222 544.035h-3.552a.854.854 0 0 0-.854.854v3.096c0 .471.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM523.732 544.035h-3.552a.854.854 0 0 0-.854.854v3.096c0 .471.382.854.854.854h3.552a.855.855 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM504.722 553.37h-3.552a.854.854 0 0 0-.854.854v3.096c0 .471.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM514.222 553.37h-3.552a.854.854 0 0 0-.854.854v3.096c0 .471.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM523.732 553.37h-3.552a.854.854 0 0 0-.854.854v3.096c0 .471.382.854.854.854h3.552a.855.855 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM504.722 562.696h-3.552a.855.855 0 0 0-.854.854v3.096c0 .471.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM514.222 562.696h-3.552a.855.855 0 0 0-.854.854v3.096c0 .471.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM523.732 562.696h-3.552a.854.854 0 0 0-.854.854v3.096c0 .471.382.854.854.854h3.552a.855.855 0 0 0 .854-.854v-3.096a.855.855 0 0 0-.854-.854ZM504.722 572.031h-3.552a.855.855 0 0 0-.854.854v3.096c0 .471.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM514.222 572.031h-3.552a.855.855 0 0 0-.854.854v3.096c0 .471.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM523.732 572.031h-3.552a.854.854 0 0 0-.854.854v3.096c0 .471.382.854.854.854h3.552a.855.855 0 0 0 .854-.854v-3.096a.855.855 0 0 0-.854-.854ZM504.722 581.357h-3.552a.855.855 0 0 0-.854.854v3.096c0 .472.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM514.222 581.357h-3.552a.855.855 0 0 0-.854.854v3.096c0 .472.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM523.732 581.357h-3.552a.854.854 0 0 0-.854.854v3.096c0 .472.382.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.855.855 0 0 0-.854-.854ZM504.722 590.691h-3.552a.855.855 0 0 0-.854.854v3.096c0 .472.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM514.222 590.691h-3.552a.855.855 0 0 0-.854.854v3.096c0 .472.383.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.854.854 0 0 0-.854-.854ZM523.732 590.691h-3.552a.854.854 0 0 0-.854.854v3.096c0 .472.382.854.854.854h3.552a.854.854 0 0 0 .854-.854v-3.096a.855.855 0 0 0-.854-.854ZM203.927 452.837h-48.675v148.772h48.675zM165.674 453.128v104.871M178.91 453.128v147.879M192.146 453.128v147.879M155.223 462.027H204.5M155.223 476.369H204.5M155.223 490.712H204.5M155.223 505.054H204.5M155.223 519.406H204.5M155.223 533.749H204.5M155.223 548.092H204.5M170.749 562.435H204.5M170.749 576.786H204.5M170.749 591.129H204.5"></path><path fill="#ffffff" stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M171.554 557.902H46.751v43.707h124.803zM359.87 521.59c-1.616.001-3.217.31-4.716.912v-1.184a25.93 25.93 0 0 0-19.012-24.995 25.93 25.93 0 0 0-29.159 11.662 19.78 19.78 0 0 0-15.503 3.752 19.786 19.786 0 0 0 12.01 35.51h56.351a12.828 12.828 0 1 0 0-25.657zM272.437 441.164a21.7 21.7 0 0 0-6.084.873 38.817 38.817 0 0 0-38.612-34.934q-1.029 0-2.067.058a69.124 69.124 0 0 0-102.617-51.692 69.12 69.12 0 0 0-29.59 33.118 49.265 49.265 0 0 0-56.298 19.35 49.27 49.27 0 0 0 20.285 72.195 49.3 49.3 0 0 0 20.651 4.525h149.636a38.64 38.64 0 0 0 26.249-10.238 21.762 21.762 0 0 0 29.743 7.082 21.758 21.758 0 0 0-11.305-40.357z"></path><path className="cloud1" fill="#ffffff" stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M415.221 544.764a9 9 0 0 0-2.319.31 15.12 15.12 0 0 0-14.799-12.033h-.398a25.6 25.6 0 0 0-21.827-20.787 25.61 25.61 0 0 0-26.489 14.383 18.74 18.74 0 0 0-17.002 2.5 18.76 18.76 0 0 0-7.83 15.297v.446a10 10 0 0 0-1.514-.136 9.248 9.248 0 0 0 0 18.496h92.188a9.245 9.245 0 0 0 9.248-9.248 9.25 9.25 0 0 0-9.248-9.248zM192.316 482.197a19.8 19.8 0 0 0-8.19 1.786 34.6 34.6 0 0 0-10.944-22.079 34.6 34.6 0 0 0-46.047-.852 34.6 34.6 0 0 0-11.752 21.659 21.4 21.4 0 0 0-12.343-3.881h-.165a29.538 29.538 0 0 0-54.876 6.22 19 19 0 0 0-4.028-.446 18.653 18.653 0 0 0-18.65 18.651 18.65 18.65 0 0 0 18.65 18.651h148.345a19.85 19.85 0 0 0 20.293-19.85 19.86 19.86 0 0 0-5.971-14.193 19.85 19.85 0 0 0-14.322-5.656zM159.094 130.937a27.885 27.885 0 0 0-26.453 19.116 19.15 19.15 0 0 0-8.491-1.989c-.407 0-.805 0-1.203.058a29.8 29.8 0 0 0-27.983-21.066 29.805 29.805 0 0 0-28.688 20.096 19.987 19.987 0 0 0-15.679 21.647 19.99 19.99 0 0 0 19.861 17.887h88.636a27.86 27.86 0 0 0 27.861-27.86 27.86 27.86 0 0 0-27.861-27.86z"></path><path className="cloud2" stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M220.705 77.09a6.4 6.4 0 0 0-1.067.096v-.223a13.267 13.267 0 0 0-26.463-1.407 7.77 7.77 0 0 0-7.22.272 11.733 11.733 0 0 0-23.076 1.28h-.369a6.58 6.58 0 0 0 0 13.15h58.224a6.578 6.578 0 0 0 4.488-11.137 6.58 6.58 0 0 0-4.488-2.012z"></path><path fill="#ffffff" d="M235.71 294.588c-23.234-18.288-47.897-6.76-47.897-6.76l-26.962-48.623s39.441-13.026 63.956 13.111c22.599 24.099 5.746 61.44 5.746 61.44l21.201 36.494s10.372-31.237-9.64-69.42l-11.148-20.133"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M235.71 294.588c-23.234-18.288-47.897-6.76-47.897-6.76l-26.962-48.623s39.441-13.026 63.956 13.111c22.599 24.099 5.746 61.44 5.746 61.44l21.201 36.494s10.372-31.237-9.64-69.42l-11.148-20.133"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M238.495 274.274s3.29 9.311 1.5 23.025c-1.348 10.373-4.358 16.43-4.358 16.43l14.939 26.847s4.287-17.184 1.585-32.454M202.148 243.706s-11.692-5.258-32.777-1.156l21.459 38.586s11.116-4.413 27.251-.61c9.446 2.228 18.186 9.405 18.186 9.405"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M195.173 257.656c-1.088-3.089-4.07-4.854-6.66-3.942-2.59.913-3.807 4.157-2.719 7.246s4.07 4.853 6.66 3.941c2.59-.913 3.807-4.156 2.719-7.245ZM248.609 309.088c-.382-3.993-1.811-7.123-3.192-6.991s-2.192 3.476-1.811 7.469 1.811 7.124 3.192 6.992 2.192-3.476 1.811-7.47ZM188.338 276.165a31.33 31.33 0 0 1 19.62-3.047s-3.677-3.932-2.118-9.135c2.275-7.437 12.373-8.596 17.36-3.238 6.12 6.564.852 14.757.852 14.757s7.614 2.271 12.382 7.504"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M213.863 266.92a1.75 1.75 0 1 0-3.466-.478 1.75 1.75 0 0 0 3.466.478ZM221.146 267.617a1.75 1.75 0 1 0-3.467-.477 1.75 1.75 0 0 0 3.467.477ZM211.314 279.311l-3.356-6.194s2.363 2.959 8.3 3.855c5.017.749 7.831-1.446 7.831-1.446l.688 7.198M212.007 271.48a9.43 9.43 0 0 0 7.174 1.393"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M202.583 272.658c-3.263-5.749-1.827-13.485 4.532-16.027 5.094-2.001 12.665 1.699 12.665 1.699M226.648 276.301a5.77 5.77 0 0 0 2.379-4.332c.389-3.937-3.331-6.968-3.331-6.968"></path><path fill="#ffffff" stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="m76.2 409.216 2.708-46.652c8.13-11.226 14.888-16.664 45.473-17.531 7.083-.209 17.39-.7 24.835-3.373 25.281-9.071 36.11-30.972 36.11-30.972l-2.141 54.469c-7.336 11.887-20.621 22.876-45.079 23.853-34.296 1.363-51.203 6.849-61.906 20.206Z"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="m82.736 365.356-1.638 33.342s5.992-8.027 24.605-11.757c20.498-4.111 30.737-.29 49.35-6.084 15.157-4.724 23.138-17.012 23.138-17.012l1.554-38.493s-10.261 16.657-34.459 22.436c-10.452 2.502-24.245 1.538-33.712 2.849"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M169.188 357.38c1.186-4.408.12-8.527-2.38-9.199s-5.488 2.355-6.674 6.763-.12 8.527 2.38 9.2c2.5.672 5.488-2.356 6.674-6.764ZM94.868 374.234c.548-4.532-.48-8.384-2.296-8.603-1.816-.22-3.732 3.276-4.28 7.807-.549 4.532.479 8.384 2.295 8.603 1.816.22 3.733-3.276 4.28-7.807ZM98.814 388.62c3.495-10.761 19.783-10.646 19.783-10.646a11.84 11.84 0 0 1-4.63-9.428c.037-6.428 4.846-11.675 11.631-11.561a12.69 12.69 0 0 1 12.171 8.844c.88 2.807.644 5.846-.66 8.483 0 0 4.025 1.422 9.687-.108 2.405-.631 4.526-1.108 6.265-1.611a11.49 11.49 0 0 1 10.838 2.45l1.286 1.157"></path><path stroke="#000000" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="1.5" d="M123.382 384.646s-.71-4.484-4.787-6.66a13.123 13.123 0 0 0 10.351 2.146 13.53 13.53 0 0 0 8.164-5.82 22.35 22.35 0 0 0-4.654 10.009"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M139.235 374.77a6.56 6.56 0 0 0 2.697-5.892c-.362-5.469-7.541-8.416-7.541-8.416M131.059 358.224a16.5 16.5 0 0 0-9.047-3.028c-7.657-.029-12.608 6.502-13.683 14.797-.721 5.695 2.211 8.994 2.211 8.994M121.603 373.641s4.15 3.57 7.545-.384"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M122.73 368.266a1.997 1.997 0 1 0-3.859-1.039 1.998 1.998 0 1 0 3.859 1.039ZM130.306 367.908a2 2 0 1 0-3.862-1.037 2 2 0 0 0 3.862 1.037Z"></path><path fill="#ffffff" d="M585.215 201.98c9.031-32.526-13.973-53.427-13.973-53.427l39.341-49.812s31.091 35.807 14.356 73.139c-15.431 34.416-62.184 33.11-62.184 33.11l-29.104 38.402s37.47-2.831 68.876-40.726l16.296-20.608"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M585.215 201.98c9.031-32.526-13.973-53.427-13.973-53.427l39.341-49.812s31.091 35.807 14.356 73.139c-15.431 34.416-62.184 33.11-62.184 33.11l-29.104 38.402s37.47-2.831 68.876-40.726l16.296-20.608"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M607.838 195.969s-8.358 7.566-23.592 11.719c-11.519 3.148-19.225 2.645-19.225 2.645l-21.699 27.559s19.988-3.052 34.882-12.623M624.029 144.221s.39-14.631-13.217-35.033l-31.193 39.595s9.544 9.765 12.644 28.435c1.813 10.931-1.897 23.298-1.897 23.298"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M606.264 143.018c2.774-2.507 3.32-6.424 1.218-8.751s-6.054-2.179-8.829.327c-2.774 2.507-3.319 6.425-1.218 8.751s6.054 2.179 8.829-.327ZM575.623 221.953c4.038-2.161 6.706-5.045 5.958-6.441-.747-1.397-4.626-.779-8.665 1.382s-6.706 5.044-5.958 6.441c.747 1.397 4.627.778 8.665-1.382ZM583.759 143.971a35.77 35.77 0 0 1 11.85 19.323s2.522-5.604 8.689-6.253c8.835-.879 14.503 9.246 11.055 16.86-4.218 9.336-15.168 7.396-15.168 7.396s.96 9.019-2.452 16.346"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M604.736 166.783a1.997 1.997 0 1 0-1.02-3.86 1.997 1.997 0 0 0 1.02 3.86ZM607.21 174.763a1.998 1.998 0 1 0-1.023-3.862 1.998 1.998 0 0 0 1.023 3.862ZM590.562 169.557l5.046-6.263s-2.075 3.793-.405 10.441c1.421 5.614 4.971 7.611 4.971 7.611l-7.278 3.895M599.116 166.837a10.8 10.8 0 0 0 .023 4.255 10.8 10.8 0 0 0 1.67 3.915"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M593.726 157.43c4.618-5.968 13.399-7.862 18.877-2.284 4.351 4.484 3.788 14.088 3.788 14.088M600.486 184.381a6.58 6.58 0 0 0 5.61.598c4.319-1.323 5.873-6.577 5.873-6.577"></path><path className="cloud3" fill="#ffffff" stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M534.398 101.559a12.6 12.6 0 0 0-4.706.902v-1.184a25.93 25.93 0 0 0-35.558-24.08 25.93 25.93 0 0 0-12.613 10.747 19.786 19.786 0 1 0-3.484 39.272h56.342a12.835 12.835 0 0 0 12.171-7.833 12.83 12.83 0 0 0 0-9.981 12.83 12.83 0 0 0-12.171-7.834z"></path><path fill="#ffffff" d="m334.105 64.948-5.837-16.578s2.243-9.642 11.521-12.909c6.913-2.433 12.714-.09 14.257 4.291 3.009 8.547-5.513 23.754-27.253 26.89-25.318 3.653-56.753-9.654-56.753-9.654l15.088 42.08s24.953 8.492 50.078 2.792c23.381-5.306 34.278-18.343 29.298-32.488l-10.449-29.675"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="m334.105 64.948-5.837-16.578s2.243-9.642 11.521-12.909c6.913-2.433 12.714-.09 14.257 4.291 3.009 8.547-5.513 23.754-27.253 26.89-25.318 3.653-56.753-9.654-56.753-9.654l15.088 42.08s24.953 8.492 50.078 2.792c23.381-5.306 34.278-18.343 29.298-32.488l-10.449-29.675"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="m337.628 63.766-5.208-14.794s.902-5.532 7.787-8.918c8.746-4.285 14.097 1.369 14.097 1.369"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M357.168 48.654s.355 14.023-21.495 20.667c-28.121 8.545-58.601-5.312-58.601-5.312l10.936 31.063s30.869 9.809 58.179-1.156"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M294.679 87.065c1.943 1.833 5.048 1.696 6.934-.304s1.84-5.108-.104-6.94c-1.943-1.833-5.048-1.696-6.934.304s-1.84 5.108.104 6.94ZM346.602 58.252A4.7 4.7 0 0 1 343.844 57a4.974 4.974 0 0 1-.077-6.91 4.98 4.98 0 0 1 6.901-.331 4.65 4.65 0 0 1 1.333 2.254M324.972 98.591c.576-5.342 7.743-7.94 7.743-7.94a8.4 8.4 0 0 1-5.803-4.666c-1.894-4.13-.362-8.928 4.05-10.876a9.05 9.05 0 0 1 10.493 2.042 8.04 8.04 0 0 1 2.105 5.632 15.8 15.8 0 0 0 6.223-2.945c5.975-4.42 11.696 1.248 11.696 1.248"></path><path stroke="#000000" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="1.5" d="M339.392 96.023s-3.388-5.18-6.677-5.372c0 0 4.263.162 7.263-2.146a9.5 9.5 0 0 0 3.584-5.717c-1.116 4.106.643 11.47.643 11.47"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M345.083 82.42a4.625 4.625 0 0 0-.015-4.583c-1.868-3.398-7.381-3.143-7.381-3.143M334.85 74.256a11.8 11.8 0 0 0-6.738.756c-4.948 2.27-6.203 7.937-4.404 13.573 1.233 3.864 4.114 5.104 4.114 5.104M363.794 67.651s1.167 7.956-2.736 13.901c-4.097 6.251-8.035 7.557-8.035 7.557M334.619 86.516s3.903.161 4.045-3.55"></path><path stroke="#000000" strokemilterlimit="10" strokeWidth="1.5" d="M330.117 83.06a1.426 1.426 0 1 0 2.69-.947 1.426 1.426 0 0 0-2.69.947ZM334.955 79.834a1.426 1.426 0 1 0 2.69-.947 1.426 1.426 0 0 0-2.69.947Z"></path></svg>
                    </div>
                </div>
            </Flexbox>
        </div>
    );
}

export default Loading;