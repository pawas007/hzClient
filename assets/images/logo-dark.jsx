import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={180}
    height={40}
    fill="none"
    viewBox="0 0 127 22"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M15.08 0v20.762l-.739.432h-.006a12.369 12.369 0 0 1-1.515-.227l-.21-.048a11.937 11.937 0 0 1-2.962-1.127.615.615 0 0 1-.307-.724c.061-.192.161-.39.272-.595.11-.206.475-.802.919-1.563.77-1.325 1.78-3.15 2.12-4.298l.148-.484.181-.6c.051-.208.11-.419.169-.631.06-.213.12-.428.176-.645.24-.853.405-1.789.087-2.642a1.99 1.99 0 0 0-.453-.638c-1.315-1.254-4.302-.95-5.263-.985-.394-.015-.889.011-1.361.05h-.003a28.51 28.51 0 0 0-1.065.111l-.18.023-.21.027-.062.009a10.463 10.463 0 0 1 .752-1.378A10.812 10.812 0 0 1 7.054 3.11 11.53 11.53 0 0 1 12.436.286a4.451 4.451 0 0 1 .243-.05 10.401 10.401 0 0 1 .626-.108l.126-.019h.002a11.492 11.492 0 0 1 .586-.064l.017-.002.194-.014c.126-.009.253-.015.38-.02h.004l.112-.004h.04l.126-.002.187-.001V0Z"
      />
      <Path
        fill="#fff"
        d="M15.08.677v8.44a.112.112 0 0 1-.006.034c-.372 1.219-1.166 3.686-.686 4.765.144.329.367.592.643.802.03.023.048.057.048.094v6.342a.125.125 0 0 1-.129.12 12.013 12.013 0 0 1-3.776-.64c-.044-.014-.088-.03-.132-.046l-.009-.003a.72.72 0 0 0-.008-.003l-.063-.023-.007-.003-.007-.002a2.23 2.23 0 0 0-.162-.061l-.002-.001h-.002l-.011-.004a1.509 1.509 0 0 1-.053-.021l-.066-.027-.04-.015-.006-.003c-.047-.018-.093-.037-.14-.057a1.414 1.414 0 0 1-.063-.026l-.092-.04-.168-.074a11.724 11.724 0 0 1-.643-.315l-.113-.061-.112-.062-.079-.044a3.658 3.658 0 0 1-.088-.052l-.012-.006-.043-.026-.105-.062a11.008 11.008 0 0 1-.739-.485c-.676-.36-1.008-.983-.635-1.725.022-.066.046-.131.072-.197.152-.392.343-.776.511-1.147l.198-.387.197-.39.202-.396c.466-.916.876-1.761 1.1-2.327.615-1.562.887-2.999.668-3.926-.361-1.564-1.905-1.989-4.034-2.067a21.246 21.246 0 0 0-1.897.019l.087-.07.026-.021.384-.308L12.436.285a12.326 12.326 0 0 1 2.542.274h.001c.059.013.1.062.1.118Z"
      />
      <Path
        fill="#fff"
        d="m25.568 14.706-.087.07-.027.021-.384.308-7.348 5.885a12.313 12.313 0 0 1-2.542-.274h-.001a.122.122 0 0 1-.1-.118v-8.44c0-.012.002-.022.005-.033.372-1.22 1.166-3.686.686-4.766a2.03 2.03 0 0 0-.642-.802.118.118 0 0 1-.049-.094V.122c0-.068.058-.122.13-.121a12.011 12.011 0 0 1 3.775.64l.132.046.01.003a.72.72 0 0 0 .008.004l.063.022.007.003.006.003a2.23 2.23 0 0 0 .165.062h.001a1.615 1.615 0 0 1 .064.025l.067.026.039.015.007.003c.046.019.093.037.139.057l.063.027c.031.013.062.025.093.04.056.023.112.049.168.073l.013.007a11.898 11.898 0 0 1 1.034.534l.042.025c.036.02.071.042.106.063a11.343 11.343 0 0 1 .675.44c.576.317 1.018.941.776 1.587a1.56 1.56 0 0 1-.085.21 5 5 0 0 1-.064.168c-.152.392-.343.777-.511 1.148l-.198.387-.197.39-.202.396c-.466.915-.876 1.761-1.1 2.327-.615 1.562-.887 2.999-.668 3.926.361 1.564 1.904 1.988 4.034 2.066.674.025 1.315.014 1.897-.018Z"
      />
      <Path
        fill="#2B2B45"
        d="M14.85.532 5.267 6.148l-.564.33c.171-.027.366-.054.579-.08h.003c.07-.01.142-.018.216-.026h.002c.864-.1 2-.178 3.25-.132 2.13.078 3.674.503 4.035 2.067.22.926-.053 2.363-.669 3.925-.52 1.313-1.196 2.562-1.863 3.812-.282.528-.572 1.052-.831 1.59-.27.56-.732 1.29-.416 1.91.025.049.054.096.086.141l.012.007.088.051.08.045.111.061.113.061a10.852 10.852 0 0 0 .643.315l.168.075.092.04.064.026c.046.02.092.038.139.057a.043.043 0 0 0 .007.003l.039.015.067.026.063.025h.004l.03.013.047.017.085.032.007.002.07.025.008.003.009.004.133.046a12.288 12.288 0 0 0 .582.183 11.988 11.988 0 0 0 3.322.458V.398l-.23.134ZM24.875 14.878h-.002l-.217.026h-.002c-.864.099-2 .177-3.25.132-2.13-.079-3.673-.504-4.034-2.067-.22-.927.053-2.364.668-3.926.42-1.062.97-2.085 1.498-3.102.336-.647.675-1.293 1.009-1.94.194-.38.424-.755.569-1.159.144-.403.24-.904-.051-1.252a10.941 10.941 0 0 0-1.047-.54l-.169-.075-.092-.04a1.269 1.269 0 0 0-.063-.026c-.046-.02-.093-.038-.14-.057a.039.039 0 0 0-.006-.003l-.04-.015-.066-.027-.064-.024h-.004l-.03-.013-.046-.017c-.03-.01-.057-.022-.086-.032l-.006-.002-.07-.025-.009-.004-.009-.003-.132-.046a11.417 11.417 0 0 0-.582-.183A11.983 11.983 0 0 0 15.079 0v20.878l.23-.135 9.582-5.616.563-.33c-.171.026-.365.054-.579.08Z"
      />
      <Path
        fill="#fff"
        d="M25.342 15.07a10.448 10.448 0 0 1-.752 1.378 10.802 10.802 0 0 1-1.486 1.718 11.53 11.53 0 0 1-5.382 2.824 4.454 4.454 0 0 1-.242.05 10.685 10.685 0 0 1-.626.108l-.126.018s-.001.002-.002 0a11.494 11.494 0 0 1-.586.065l-.017.001-.195.015c-.126.009-.252.015-.379.02h-.005a8.407 8.407 0 0 1-.112.003h-.04a10.575 10.575 0 0 1-.313.004V.514l.738-.433h.007a12.432 12.432 0 0 1 1.514.228 11.946 11.946 0 0 1 3.172 1.175.615.615 0 0 1 .307.724c-.06.191-.16.39-.272.594-.11.206-.474.802-.918 1.564-.77 1.324-1.781 3.15-2.121 4.297l-.147.484a55.91 55.91 0 0 0-.182.6c-.05.208-.109.419-.168.631-.06.213-.12.429-.177.646-.239.853-.405 1.788-.086 2.642.11.248.265.459.453.638 1.314 1.253 4.301.95 5.262.985.394.014.89-.012 1.362-.051h.002c.395-.034.774-.075 1.066-.111l.18-.023.209-.027.062-.008Z"
      />
      <Path
        fill="#8296FF"
        d="M25.514 14.827c-.02.044-.04.088-.062.132h.02l-.024.01a10.28 10.28 0 0 1-1.345 2.127c-.308.378-.641.735-.998 1.07a11.53 11.53 0 0 1-5.382 2.824h-.001a4.108 4.108 0 0 1-.242.05 10.685 10.685 0 0 1-.626.108l-.126.019h-.002a11.384 11.384 0 0 1-.586.064l-.017.002a12.444 12.444 0 0 1-.573.034h-.005a8.407 8.407 0 0 1-.113.004h-.039l-.126.003h-.187a12.01 12.01 0 0 1-3.76-.592c-.481-.157-.96-.32-1.394-.558-.904-.495-.756-1.477-.376-2.119l.009-.018c.86-1.63 2.458-4.58 2.988-5.92.606-1.539.875-2.953.658-3.866-.355-1.539-1.874-1.957-3.97-2.034a21.615 21.615 0 0 0-3.2.13h-.002c-.28.033-.531.067-.747.099h-.003c-.252.038-.456.073-.605.102l-.06.011.027-.062c.02-.044.04-.088.062-.132h-.02l.025-.01a10.271 10.271 0 0 1 1.345-2.127c.307-.378.64-.735.998-1.07A11.53 11.53 0 0 1 12.437.284a4.377 4.377 0 0 1 .242-.05 10.405 10.405 0 0 1 .752-.126s.001-.002.002 0a11.492 11.492 0 0 1 .586-.065l.017-.002.195-.014c.126-.009.252-.015.379-.02h.005l.112-.004h.04L14.892 0h.187a12.012 12.012 0 0 1 3.76.592c.48.157.96.32 1.394.559.904.495.756 1.476.376 2.118l-.01.018c-.86 1.63-2.458 4.58-2.988 5.92-.605 1.539-.874 2.953-.658 3.866.356 1.54 1.874 1.957 3.971 2.034 1.23.045 2.349-.033 3.2-.13h.001c.28-.033.532-.067.747-.099h.003c.252-.038.457-.073.605-.101l.061-.012-.028.062Z"
      />
      <Path
        fill="#fff"
        d="M4.937 14.739s.265-.149-.133-.149c-.27 0-.461-.465-.558-.654-.18-.35-.361-.708-.53-1.06-.179-.376-.313-.768-.518-1.134-.215-.385-.483-.748-.827-1.028-.3-.245-.651-.42-1.013-.56-.361-.139-.748-.21-1.092-.38-.044-.022-.086-.05-.127-.077-.025-.016-.1-.094-.125-.094h.199l.19-.002c.33.002.606-.053.922-.09.058-.01.113-.02.165-.032.885-.19.949-.567 4.195-.746 1.043-.064 1.488-.084 1.82-.032.625.085 1.25-.138.73 1.157-.617 1.528-1.129 2.302-1.508 2.918-.938 1.549-1.46 1.963-1.791 1.963Z"
      />
      <Path
        fill="#8296FF"
        d="M5.05 14.93s-.332.032-.635-.647c-.304-.7-.872-2.907-1.488-3.502-.89-.848-1.876-1.039-2.815-1.156-.929-.117 4.18-.997 5.696-1.072 1.052-.052 1.488-.084 1.82-.031.625.084 1.251.244.73 1.527-.616 1.528-1.128 2.303-1.508 2.918-.957 1.549-1.469 1.963-1.8 1.963Z"
      />
      <Path
        fill="#fff"
        d="M25.044 6.241s-.266.149.132.149c.43 0 .887 1.56 1.599 2.762a6 6 0 0 0 .2.317 3.142 3.142 0 0 0 .996.964c.457.266.954.486 1.476.498a6.58 6.58 0 0 0 .75.044 6.334 6.334 0 0 1-.553.242 12.62 12.62 0 0 1-1.29.387l-.267.064c-.576.12-1.169.222-1.762.32l-.357.057c-1.245.25-2.572.47-3.845.116a1.896 1.896 0 0 1-.296-.194c-.052-.066-.1-.14-.145-.223a.9.9 0 0 1-.088-.408c.013-.674.745-1.324.992-2.014.064-.116.125-.225.184-.327.179-.307.34-.56.482-.79.938-1.55 1.46-1.964 1.79-1.964h.002Z"
      />
      <Path
        fill="#8296FF"
        d="M25.104 5.594s.332-.031.634.648c.304.7.872 2.907 1.488 3.501.891.849 1.877 1.04 2.815 1.157.929.116-4.18.997-5.696 1.071-1.052.053-1.488.085-1.82.032-.625-.085-1.25-.244-.73-1.528.617-1.528 1.129-2.302 1.508-2.918.957-1.548 1.469-1.963 1.8-1.963Z"
      />
    </G>
    <Path
      fill="#8296FF"
      d="M43.958 15.174c-.205 0-.39-.033-.519-.292-.108-.238.206-1.082.292-2.671.097-1.568-1.427-1.676-1.427-1.676h-4.358c-.703 0-.66-.822-.66-.822l.466-3.114c.162-.8-.53-1.795-1.352-1.795H33.935a.597.597 0 0 0-.53.411c-.087.303.119.638.41.638h.12c.237 0 .421.195.432.519l-1.416 9.386c-.054.346.194.616.562.616h2.108c.357 0 .703-.27.746-.616l.476-3.169c0 .022 0 .011.011-.065l.022-.194c.097-.433.389-.617.66-.617.183 0 2.27-.021 2.465-.021.194 0 .335.14.335.281 0 .151-.238 1.438-.26 2.692a1.56 1.56 0 0 0 1.082 1.568h2.616c.281 0 .65-.26.66-.594.043-.184-.13-.465-.476-.465Z"
    />
    <Path
      fill="#8296FF"
      d="M108.099 15.174c-.205 0-.389-.033-.519-.292-.108-.238.725-5.147.725-5.147l.465-3.114c.162-.8-.53-1.795-1.352-1.795H104.953a.597.597 0 0 0-.53.41c-.087.304.119.639.4.639h.119c.238 0 .422.194.432.519l-1.146 7.59c-.173 1.233.443 2.412 1.438 2.412h2.271c.281 0 .649-.39.66-.725a.48.48 0 0 0-.498-.497Z"
    />
    <Path
      fill="#8296FF"
      d="M73.034 10.621h-1.103c-.389-.097-.389-.562-.389-.746 0-.032 0-.065-.01-.086.13-.93.237-1.633.237-1.633s.098-1.049-.724-1.049h-1.752c-.79 0-.843.54-.908.844l-.335 1.914-.076.389a.556.556 0 0 1-.433.357h-.454a.538.538 0 0 0-.53.53c0 .205.12.389.303.475a.415.415 0 0 0 .206.054h.14c.26.022.422.216.39.573l-.065.357-.26 1.46c-.173 1.232.444 2.411 1.438 2.411 0 0 2.163-.032 2.444-.032.281 0 .551-.303.562-.638.011-.238-.119-.552-.465-.552-.205 0-.486-.075-.486-.303 0-.108.173-1.34.367-2.724.173-.53.541-.552.779-.552h1.092c.281 0 .53-.238.53-.53a.489.489 0 0 0-.498-.519Z"
    />
    <Path
      fill="#8296FF"
      d="M126.503 10.621H125.4c-.389-.097-.389-.562-.389-.746 0-.032 0-.065-.011-.086.141-.93.238-1.633.238-1.633s.097-1.049-.724-1.049h-1.752c-.789 0-.843.54-.908.844l-.335 1.914-.076.389a.557.557 0 0 1-.433.357h-.454a.538.538 0 0 0-.53.53c0 .205.119.389.303.475a.415.415 0 0 0 .206.054h.14c.26.022.422.216.389.573L121 12.6l-.26 1.46c-.173 1.233.443 2.411 1.438 2.411 0 0 2.163-.032 2.444-.032.281 0 .551-.303.562-.638.011-.238-.119-.552-.465-.552-.205 0-.486-.075-.486-.302 0-.109.173-1.341.367-2.725.173-.53.541-.552.779-.552h1.092c.281 0 .53-.238.53-.53a.484.484 0 0 0-.498-.519Z"
    />
    <Path
      fill="#8296FF"
      d="M54.09 10.643h-6.456c-1.632-.01-2.162 1.557-2.162 1.557s-.292.822-.454 2.455c-.184 1.87 2.216 1.632 2.216 1.632h5.688c2.033 0 2.303-1.654 2.303-1.654s.303-1.233.303-2.541c0-1.308-1.438-1.449-1.438-1.449Zm-1.86 1.687c-.065.53-.292 2.098-.292 2.098s-.14.68-.681.68H49.18s-.757.076-.692-.702c.075-.779.184-1.72.26-1.968.075-.249.161-.757.864-.757h2.098c.022-.01.584.13.519.649Z"
    />
    <Path
      fill="#8296FF"
      d="M118.231 10.643h-6.455c-1.632-.01-2.162 1.557-2.162 1.557s-.292.822-.454 2.455c-.184 1.87 2.216 1.632 2.216 1.632h5.688c2.022 0 2.303-1.654 2.303-1.654s.303-1.233.303-2.541c0-1.308-1.439-1.449-1.439-1.449Zm-1.859 1.687c-.065.53-.292 2.098-.292 2.098s-.13.68-.681.68h-2.077s-.756.076-.692-.702c.076-.779.184-1.72.26-1.968.076-.249.162-.757.865-.757h2.098c.01-.01.584.13.519.649Z"
    />
    <Path
      fill="#8296FF"
      d="M65.487 10.632s-5.288-.01-6.012 0c0 0-2.736.033-2.822 1.72.021 1.87 1.806 1.686 1.806 1.686h3.124c.174 0 .53.108.53.465 0 .346-.205.606-.54.606h-4.736c-.346 0-.714.173-.714.594 0 .27.184.627.692.627h6.51c.745 0 2.216-.637 2.216-2.054 0-1.47-2.184-1.287-2.184-1.287h-2.595s-.563 0-.627-.627c0-.573.605-.627.605-.627s4.422-.022 4.682-.022c.346 0 .649-.162.649-.486.01-.4-.216-.595-.584-.595Z"
    />
    <Path
      fill="#8296FF"
      d="M93.578 11.292s-.368-.735-.984-.735l-5.741-.011c-1.266 0-2.92.465-3.266 1.881-.346 1.417-.346 2.066-.346 2.066s.076 1.794 1.449 1.794h6.628c1.06.011 1.698-.475 2.25-1.027 1.318-1.319 2.962-2.595 3.405-3.049.444-.454.984-.487 1.633-.465.649.022 1.06.032 1.006.606-.065.637-.357 2.26-.357 2.26s-.238.627-.898.627l-4.4-.011s.097 1.06.897 1.06c.681 0 6.639.01 8.477 0 .303 0 .552-.195.552-.509v-.086a.555.555 0 0 0-.444-.54c-.454.064-.713-.196-.713-.477 0-.475.292-2.346.292-2.346s-.022-1.557-1.46-1.72c0 0-2.898-.053-5.32-.053-1.384 0-2.217.789-2.217.789l-4.238 3.6s-.8.217-1.017.217h-1.438a.593.593 0 0 1-.594-.595c0-.335.27-.605.605-.595l1.135.033c.336.01.606-.26.606-.595a.593.593 0 0 0-.595-.595h-.865a.55.55 0 0 1-.54-.54.55.55 0 0 1 .54-.54h5.936l.022-.444ZM78.051 12.276s.195-.238.162-.378c-.075-.217-.205-.217-.702-.217-.487 0 1.784-.41 1.784-.41l.443.605-1.254.54-.433-.14Z"
    />
    <Path
      fill="#8296FF"
      d="M80.31 11.681h-5.245a.526.526 0 0 1-.52-.519c0-.281.239-.519.52-.519h5.244c.281 0 .52.238.52.52a.526.526 0 0 1-.52.518ZM81.943 16.298h-5.244a.526.526 0 0 1-.52-.519c0-.28.239-.519.52-.519h5.244c.281 0 .519.238.519.52a.526.526 0 0 1-.52.518Z"
    />
    <Path
      fill="#8296FF"
      d="M76.73 16.298h-2.249c-.216 0-.194-.183.065-.389l6.045-4.887c.249-.206.638-.368.865-.368h2.249c.216 0 .195.162-.065.368l-6.044 4.876c-.26.195-.65.4-.865.4Z"
    />
    <Path
      fill="#8296FF"
      d="M75.758 16.298h-2.25c-.216 0-.194-.183.066-.389l4.54-3.676 1.504-1.211c.249-.206.638-.368.865-.368h2.249c.216 0 .195.162-.065.368l-6.044 4.876c-.26.195-.638.4-.865.4Z"
    />
    <Path
      fill="#8296FF"
      d="M79.153 14.611s-.173.238-.087.379c.087.151.206.28.703.28.487 0-1.784.347-1.784.347l-.443-.606 1.254-.54.357.14Z"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h30.197v21.275H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
