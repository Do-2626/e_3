"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface LogoProps {}
const svgVariant = {
  hidden: {},
  visible: { rotate: 0, transition: { duration: 1 } },
};
const svgPathVariant = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 4, ease: "easeInOut" },
  },
};
const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className=" w-[300px] h-[65vh] ">
      <motion.svg
        variants={svgVariant}
        initial="hidden"
        animate="visible"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 427.28 701.07"
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".cls-1{font-size:21.86px;stroke:#fff;stroke-width:0.02px;font-family:BernardMT-Condensed, Bernard MT Condensed;}.cls-1,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{fill:#fff;}.cls-1,.cls-10,.cls-12,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke-miterlimit:10;}.cls-2{letter-spacing:-0.07em;}.cls-10,.cls-11,.cls-12,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke:#000;}.cls-3{stroke-width:7px;}.cls-4{stroke-width:4px;}.cls-10,.cls-5{stroke-width:5px;}.cls-6{stroke-width:6px;}.cls-11,.cls-12,.cls-7{stroke-width:2px;}.cls-9{fill:#231f20;}.cls-10,.cls-11,.cls-12{fill:none;}",
            }}
          />
        </defs>

        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-3"
          d="M870.72,510.7c-134.51,6.69-122.2,148.87,4.75,154.5,34.85,1.54,64.47-5.27,86.09-17.55,2.11-1.2,4.06-2.49,6-3.78h0a13.36,13.36,0,0,1,.85-1.84v0a13.84,13.84,0,0,1,1.09-1.65l.05-.07a15.92,15.92,0,0,1,1.28-1.46l.1-.1a17.65,17.65,0,0,1,1.44-1.27l.17-.14a17.91,17.91,0,0,1,1.56-1.08l.24-.16q.81-.48,1.68-.93l.27-.14c.63-.31,1.28-.6,2-.86l.14-.06c.73-.29,1.48-.55,2.24-.78a74,74,0,0,0,7.2-8.06,59.28,59.28,0,0,0,12.38-36C1000.22,546.07,955.14,506.51,870.72,510.7Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-4"
          d="M804.35,568.61c-24.49,10.49-22.31,65.26,39.42,84.33,47.12,14.56,109.89,2.44,117.18-14.21C973.08,611.05,839.5,553.55,804.35,568.61Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-5"
          d="M806,732.78c8.5,47.22-32,99.71,55.69,86.75,18.07-22.36-20-92.67,20-94.29,19.75,49.19-37.9,118.82,70.82,89.93"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-6"
          d="M1007.09,737.84q1-12.2,1.91-24.39H804.73v13.9c0,7.67,9.31,13.9,20.8,13.9L969,739.82a43.78,43.78,0,0,1,12.74,8.82c20.3,21.22-7,52.64,1.66,55.7,4.6,1.61,16.28-5.75,23.16-13C1027.36,769.28,1009.9,742.06,1007.09,737.84Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.rect
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-5"
          x="770.16"
          y="712.48"
          width="23.7"
          height="25.86"
          rx="8.03"
          transform="translate(-628.24 1312.5) rotate(-90)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-7"
          d="M1259.72,634.79"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-7"
          d="M1259.75,633.39"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-7"
          d="M1259.71,634.79"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-7"
          d="M1259.75,633.81"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-5"
          d="M893,460.64h.66c8.79,13.17,28.12,21.17,50.13,21.17,17.92,0,31.51-3.92,40.31-10.42,11.52-7.79,16.6-18.18,16.6-34.34a96.34,96.34,0,0,0-3.11-24.39c-.79-3-5.4-5.13-10.86-5.13H781.24c-5.64,0-10.39,2.34-10.91,5.44a113.46,113.46,0,0,0-1.6,19.64c0,20.42,6.77,34.53,21.35,43.24,11.15,6.32,26.06,10.6,45.71,10.6C869.66,486.45,887.62,472.52,893,460.64Zm73.41-36.95c5.74,0,10.49,2.4,11,5.54A54.16,54.16,0,0,1,978,438c0,16.34-10.48,27.48-37.24,27.48-22,0-38.29-10-38.29-27.1v-8.64c0-3.32,4.94-6,11-6ZM791.77,437.25c0-2.94.1-5.57.29-7.86.33-3.2,5.17-5.7,11-5.7h66.08c6.07,0,11,2.71,11,6v7.33c0,17.63-12.84,32.3-44,32.3C802.92,469.35,791.77,454,791.77,437.25Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-8"
          d="M1260,634.92"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-9"
          d="M1260,633.52"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-8"
          d="M1259.94,634.92"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-9"
          d="M1260,633.94"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-10"
          d="M914,244.13c17.57,0,32.76,10.41,32.76,31.91a43.68,43.68,0,0,1-4.9,19.75,6,6,0,0,1-6.64,2.46l-1.69-.39c-3.14-.77-4.8-3.53-3.49-5.92a34.78,34.78,0,0,0,4.57-16.71c0-12-8-19.08-19.41-19.08-10.65,0-16.72,4.88-22.63,17.18-6.59,14.88-13.62,25.11-32.24,24.08-17.7-1-30.9-11.78-30.9-29.48a38.27,38.27,0,0,1,3.31-16.25c1-2.23,4.1-3.42,6.91-2.65l1.57.43c2.94.79,4.51,3.37,3.4,5.68a30.18,30.18,0,0,0-3,13.18c0,12.45,9.28,17.18,17,17.18,10.65,0,15.88-5.54,22-18.12C888,252,897.26,244.13,914,244.13Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M804.8,230.76l-7,9.12"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M797.75,239.88c-14.92,15.17-22.45,35.85-25.84,55.74"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M771.91,295.62a159.47,159.47,0,0,0-2.43,25.8.24.24,0,0,1-.13.21l-2.4,1.3a.85.85,0,0,0-.45.6l-1.65,9.11a.15.15,0,0,1-.16.12c-3.89.18-10.33,1.07-8.06,6.25a20.2,20.2,0,0,0,7.54,8.28l5.58,2.93"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M769.75,350.22l.28,7.91c0,.09.05.11.13.06l1.12-.67"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M771.28,357.52a1,1,0,0,1,.31.56"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M999.85,357.36c0-1.14,0-2.22,0-3.24,0-.19.08-.25.23-.17"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1000.1,354a2.62,2.62,0,0,0,1.14.24"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1001.24,354.19c5.18-2.17,16.36-7.41,17.93-12.94,1.29-4.52-4.32-7.43-8.16-8.57"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1011,332.68l-1.39-.46a.18.18,0,0,1-.12-.15c-.31-3.92-3-8.33-5.29-11.6a.24.24,0,0,1,0-.2,5.24,5.24,0,0,0,.1-1.08A116.26,116.26,0,0,0,998.39,281"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M998.39,281a136.2,136.2,0,0,0-20.71-39"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M977.68,242l-4.67-5.8"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M973,236.22c-2.45-3.06-5-5.91-7.33-8.93"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M965.68,227.29a2,2,0,0,0-.08-1,2.51,2.51,0,0,0-.47-.83c-5-6.18-12.8-10.78-20.2-14.25"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M944.93,211.25c-2.36-1.14-4.76-2.21-7.22-3.2a1,1,0,0,0-.69,0l-8.43,2a.72.72,0,0,1-.5-.08"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M928.09,209.94a5.38,5.38,0,0,0-.83-.42l-15.53-6.6c-1-.42-2.26-2.45-2.9-3.27"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M908.83,199.65c-1-1.21-2.77-2.86-4.5-3a188.7,188.7,0,0,0-38,.53,1.41,1.41,0,0,0-.85.31q-2.6,2.37-5.19,4.71a3.1,3.1,0,0,1-1,.61q-11.06,3.85-22,7.7a.27.27,0,0,1-.3-.07l-2.1-2.41a.15.15,0,0,0-.19,0c-11.54,5.26-22.5,12.74-29.69,22.49a.61.61,0,0,0-.07.14.67.67,0,0,1-.06.15"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M908.83,199.65c-4.85,3.34-13,10.44-6.89,16.32"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M805,230.9a.16.16,0,0,0-.1-.08.09.09,0,0,1-.07-.06"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M928.09,209.94a3.4,3.4,0,0,1-1.06.36c-2.14.28-4.29.57-6.43.88"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M920.6,211.18a.86.86,0,0,1-.42-.1q-5.94-3.11-11.94-6.21a.25.25,0,0,0-.22,0q-6.85,3.6-6.08,11.09"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M877.21,318.92a604.27,604.27,0,0,0-74,6.15c-1.73.26-3.36.52-4.91.8-2.18.39-4.46.69-6.57,1.29,0,0,0,0,0,0a0,0,0,0,0,0,0c24.75-2.62,49.82-3.47,74.72-3.77"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M861.91,333a.29.29,0,0,1-.14.17c-.66.39-1.65.66-1.88,1.44-.12.4-.45.78-.15,1.29a.57.57,0,0,0,.15.16l.57.4q.18.12,0,.21a.75.75,0,0,1-.47,0s0,0,0,0h0s0,0,0,0h.11a.05.05,0,0,1,0,0l0,0a.39.39,0,0,0-.3.18"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M866.42,323.46l.05.06c0,.06,0,.1-.05.1l-1.88,0c-.07,0-.12,0-.12.11a.1.1,0,0,0,0,.07l0,.05c0,.05,0,.07,0,.07h-.12c-.09,0-.09,0,0,.06h.12c.17,0,.28,0,.32.13a.19.19,0,0,0,.12.1.83.83,0,0,0,.66-.06.2.2,0,0,1,.21,0c1,.46,1.22.06,2-.17a.81.81,0,0,1,.26,0c.37.1.42.27.16.52a7.4,7.4,0,0,1-1.25,1c-.5.3-1,1.4-1.7,1.92a2.67,2.67,0,0,0-.91,1.17.62.62,0,0,1-.14.19.74.74,0,0,0-.26.82c0,.08,0,.11-.1.09a.41.41,0,0,0-.49.2,11.55,11.55,0,0,0-.63,1.38"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M859.81,337q-37.9.81-75.82.66c-3.9,0-8.13-.2-12.21-.19a.31.31,0,0,0-.21.07l-.25.21"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M771.32,337.75l-8.27-.34a.19.19,0,0,0-.2.17v.05a14.52,14.52,0,0,0,6.86,8.62"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M769.71,346.25l0,4"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M783.19,292.85a48.9,48.9,0,0,0-1.13,20.81c0,.16.12.22.3.19l16.45-3c.14,0,.21,0,.21.16v13.43a.21.21,0,0,0,.16.2l1.5.45A.23.23,0,0,0,801,325a.09.09,0,0,1,0-.05l.88-19.18a.18.18,0,0,0-.17-.17h0l-13.32,2.29a.4.4,0,0,1-.43-.18c-2.3-3.77-2.66-8.89-2.69-13.14"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M785.19,294.56l.22-7.63s0,0,0,0l0,0a52.53,52.53,0,0,0-2.13,5.94"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M783.19,292.85c-.41.18-.6-.1-.56-.82a.5.5,0,0,0-.49-.51c-.1,0-.16-.1-.2-.28a.2.2,0,0,1,0-.11.15.15,0,0,0,0-.16,1,1,0,0,0-1.44-.46.5.5,0,0,1-.24,0c-1.29-.18-2.86,0-3,1.43a.29.29,0,0,1-.33.24.24.24,0,0,1-.14,0,1.11,1.11,0,0,0-1.77.35.21.21,0,0,1-.21.11l-.67-.05a.58.58,0,0,0-.56.31l-.51,1a.37.37,0,0,1-.18.17.67.67,0,0,0-.44.76.46.46,0,0,1,0,.2l-.17.5a.12.12,0,0,1-.12.08h-.2"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M789.47,338.7a2,2,0,0,0,3.94.05"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M771.58,357.33l-.3.19"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M956.89,324.05c-29.89-.79-59.71-1-90.47-.59"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M962.82,322.23a713.06,713.06,0,0,0-85.61-3.31"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M999,332.92q-7.43,1.09-14.82,1.87"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M984.14,334.79l-4,.46"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M980.15,335.25q-13.56,1.42-27.16,2.26s-.09,0-.09.08a.15.15,0,0,0,0,.07"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M952.91,337.66a7.47,7.47,0,0,0-1.07-.05q-13.46.93-26.94,1.39c-15.23.53-30.42.94-45.65,1q-32.25.2-64.43-.62"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M814.82,339.41a.05.05,0,0,1,0-.05s0,0,0,0l-21.34-.58"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M793.41,338.75a14.08,14.08,0,0,0-2.35-.1,5.3,5.3,0,0,1-1.31-.18.16.16,0,0,0-.17.07l-.11.16"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M789.47,338.7a.07.07,0,0,0,0-.08s-.05,0-.08,0c-6-.25-12-.41-17.94-.68"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M771.42,337.91a.29.29,0,0,1-.1-.16"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M771.42,337.91c-1.06,3.27-1.75,5.28-1.71,8.34"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M952.47,334.5c-8.08.12-16.17.58-24.26.8-22.8.63-45.59,1.27-68.4,1.7"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M999.85,357.36a14.75,14.75,0,0,0-2.11.06c-.5,0-1-.12-1.5-.1-2.28.09-5,0-6.82,0q-101,0-202,0c-4.63,0-9.41.12-14.12,0a4.16,4.16,0,0,0-.67.13.32.32,0,0,1-.25-.05.27.27,0,0,0-.35,0,.24.24,0,0,1-.2,0l-.27-.11"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M771.58,357.33a72.38,72.38,0,0,1,6.69-3.72,256.35,256.35,0,0,1,36.55-14.2"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1011,332.68c-.13.21-.38.25-.75.11a.13.13,0,0,1-.1-.11c0-.06,0-.06-.07,0l-.07.08c0,.06-.09.05-.11,0l0-.15a.11.11,0,0,0-.13-.07.11.11,0,0,0-.08.07,1.37,1.37,0,0,1-1.69,1.2"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1008,333.77c-2.53-1.19-5.66-1.19-8.38-.89"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M999.58,332.88l-.62,0"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M999,332.92l-2.77,0c-1,0-1.88,0-2.77.05q-12.92.7-25.85,1c-5,.12-10.07.38-15.1.56"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M952.47,334.5l-.57-.12c-.07,0-.08,0,0-.08l.11,0c.08,0,.11-.09.09-.16a5.75,5.75,0,0,1,.3-2.75c0-.06,0-.08,0-.08h-.73c-.18,0-.19,0,0-.11a2,2,0,0,1,.84-.12.17.17,0,0,0,.19-.09A16,16,0,0,0,954.3,328c.22-.76.76-1.29.88-2.14a.37.37,0,0,1,.09-.19,3.21,3.21,0,0,0,.5-.95.12.12,0,0,0-.09-.15h-.06a1.93,1.93,0,0,1-1.09-.17s0,0,0,0a7.1,7.1,0,0,1,2.35-.31"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M956.89,324.05l27.18.81c.07,0,.09,0,.07-.07a.11.11,0,0,0-.08-.07l-4.92-.67"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M992.58,289.14q1.11,9.84,1.52,19.74a41,41,0,0,1-.59,8.84c-.28,1.6,7.12,1.9,8.21,1.91.22,0,.24-.05.06-.17l-4.59-3a.35.35,0,0,1-.15-.26,108.91,108.91,0,0,0-4.56-31.05.16.16,0,0,0-.11-.1h-.08"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M998.39,281a.29.29,0,0,0-.15.14.59.59,0,0,1-.13.19c-.1.09-.16.09-.19,0s-.06-.1-.13,0a.29.29,0,0,1-.35,0,.24.24,0,0,0-.22,0,2.63,2.63,0,0,0-1.56,1.75.18.18,0,0,1-.19.14l-1.16.09c-.12,0-.17.07-.15.17a1.45,1.45,0,0,1-1.12,1.76.13.13,0,0,0-.1.1v.08a.08.08,0,0,1-.1.07.11.11,0,0,1-.07-.06l-.14-.47a.14.14,0,0,0-.17-.09.14.14,0,0,0-.08.05l-.08.09"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M992.29,285l.29,4.14"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M979.14,324.05l-16.32-1.82"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1000.1,354a351.46,351.46,0,0,0-47.19-16.29"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M980.15,335.25c.84,2.38,3.53,1.8,4-.46"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1001.45,350.9c.23-5.37.58-12.34-1.87-18"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1001.24,354.19l.21-3.29"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M1001.45,350.9c4.66-1.43,8.15-4.71,8.82-9.26.38-2.59.24-6.2-2.31-7.87"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M834.41,210.94c-2.4,5.4-3.14,12.93,4.27,15.37a.67.67,0,0,0,.44,0l15.9-6.64s0,0,0-.05a.1.1,0,0,0,0,0,.17.17,0,0,0-.1,0l-15.45,3.92a.28.28,0,0,1-.24,0,5.69,5.69,0,0,1-1.12-.78c-3.6-3.12-4.38-7.39-3.5-11.69.11-.53,0-.55-.18,0"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M993.24,340.3a1.89,1.89,0,0,0,1.91-1.87h0a1.93,1.93,0,0,0-3.85,0h0a1.9,1.9,0,0,0,1.94,1.84"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-11"
          d="M782.35,343.25a1.9,1.9,0,0,0-2-1.8h0a1.9,1.9,0,0,0-2,1.8h0a1.9,1.9,0,0,0,2,1.81h0a1.9,1.9,0,0,0,2-1.81h0"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M908.83,199.65c.64.82,1.92,2.85,2.9,3.27l15.53,6.6a5.38,5.38,0,0,1,.83.42,3.4,3.4,0,0,1-1.06.36c-2.14.28-4.29.57-6.43.88a.86.86,0,0,1-.42-.1q-5.94-3.11-11.94-6.21a.25.25,0,0,0-.22,0q-6.85,3.6-6.08,11.09C895.85,210.09,904,203,908.83,199.65Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M834.41,210.94c.23-.51.29-.49.18,0-.88,4.3-.1,8.57,3.5,11.69a5.69,5.69,0,0,0,1.12.78.28.28,0,0,0,.24,0l15.45-3.92a.17.17,0,0,1,.1,0,.1.1,0,0,1,0,0s0,0,0,.05l-15.9,6.64a.67.67,0,0,1-.44,0C831.27,223.87,832,216.34,834.41,210.94Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M992.29,285h.08a.16.16,0,0,1,.11.1A108.91,108.91,0,0,1,997,316.16a.35.35,0,0,0,.15.26l4.59,3c.18.12.16.18-.06.17-1.09,0-8.49-.31-8.21-1.91a41,41,0,0,0,.59-8.84q-.42-9.9-1.52-19.74Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M785.19,294.56c0,4.25.39,9.37,2.69,13.14a.4.4,0,0,0,.43.18l13.32-2.29a.18.18,0,0,1,.21.12v0L801,324.93a.21.21,0,0,1-.22.18h-.06l-1.5-.45a.21.21,0,0,1-.16-.2V311c0-.13-.07-.18-.21-.16l-16.45,3c-.18,0-.28,0-.3-.19a48.9,48.9,0,0,1,1.13-20.81,52.53,52.53,0,0,1,2.13-5.94,0,0,0,0,1,.06,0s0,0,0,0Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M962.82,322.23l16.32,1.82,4.92.67a.11.11,0,0,1,.08.07s0,.07-.07.07l-27.18-.81c-29.89-.79-59.71-1-90.47-.59-24.9.3-50,1.15-74.72,3.77a0,0,0,0,1,0,0s0,0,0,0c2.11-.6,4.39-.9,6.57-1.29,1.55-.28,3.18-.54,4.91-.8a604.27,604.27,0,0,1,74-6.15A713.06,713.06,0,0,1,962.82,322.23Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M1011,332.68c3.84,1.14,9.45,4.05,8.16,8.57-1.57,5.53-12.75,10.77-17.93,12.94l.21-3.29c4.66-1.43,8.15-4.71,8.82-9.26.38-2.59.24-6.2-2.31-7.87a1.37,1.37,0,0,0,1.69-1.2.12.12,0,0,1,.13-.07.11.11,0,0,1,.08.07l0,.15c0,.07.06.08.11,0l.07-.08s.06,0,.07,0a.13.13,0,0,0,.1.11C1010.63,332.93,1010.88,332.89,1011,332.68Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M1008,333.77c2.55,1.67,2.69,5.28,2.31,7.87-.67,4.55-4.16,7.83-8.82,9.26.23-5.37.58-12.34-1.87-18C1002.3,332.58,1005.43,332.58,1008,333.77Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M999,332.92q-7.43,1.09-14.82,1.87l-4,.46q-13.56,1.42-27.16,2.26s-.09,0-.09.08a.15.15,0,0,0,0,.07,7.47,7.47,0,0,0-1.07-.05q-13.46.93-26.94,1.39c-15.23.53-30.42.94-45.65,1q-32.25.2-64.43-.62a.05.05,0,0,1,0-.05s0,0,0,0l-21.34-.58a14.08,14.08,0,0,0-2.35-.1,5.3,5.3,0,0,1-1.31-.18.16.16,0,0,0-.17.07l-.11.16a.07.07,0,0,0,0-.08s-.05,0-.08,0c-6-.25-12-.41-17.94-.68a.29.29,0,0,1-.1-.16l.25-.21a.31.31,0,0,1,.21-.07c4.08,0,8.31.17,12.21.19q37.92.15,75.82-.66c22.81-.43,45.6-1.07,68.4-1.7,8.09-.22,16.18-.68,24.26-.8,5-.18,10.07-.44,15.1-.56q12.93-.3,25.85-1c.89-.05,1.81-.07,2.77-.05Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M999.58,332.88c2.45,5.68,2.1,12.65,1.87,18l-.21,3.29a2.62,2.62,0,0,1-1.14-.24,351.46,351.46,0,0,0-47.19-16.29.15.15,0,0,1,0-.07s0-.07.09-.08q13.6-.84,27.16-2.26c.84,2.38,3.53,1.8,4-.46q7.4-.77,14.82-1.87Zm-6.34,7.42a1.89,1.89,0,0,0,1.91-1.87h0a1.93,1.93,0,0,0-3.85,0h0A1.9,1.9,0,0,0,993.24,340.3Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M984.14,334.79c-.46,2.26-3.15,2.84-4,.46Z"
          transform="translate(-684.84 -194.92)"
        />
        <ellipse
          className="cls-12"
          cx="993.23"
          cy="338.45"
          rx="1.85"
          ry="1.93"
          transform="translate(-40.87 1133) rotate(-89.38)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M771.32,337.75a.29.29,0,0,0,.1.16c-1.06,3.27-1.75,5.28-1.71,8.34a14.52,14.52,0,0,1-6.86-8.62.18.18,0,0,1,.15-.21h0Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M952.91,337.66A351.46,351.46,0,0,1,1000.1,354c-.15-.08-.23,0-.23.17,0,1,0,2.1,0,3.24a14.75,14.75,0,0,0-2.11.06c-.5,0-1-.12-1.5-.1-2.28.09-5,0-6.82,0q-101,0-202,0c-4.63,0-9.41.12-14.12,0a4.16,4.16,0,0,0-.67.13.32.32,0,0,1-.25-.05.27.27,0,0,0-.35,0,.24.24,0,0,1-.2,0l-.27-.11a72.38,72.38,0,0,1,6.69-3.72,256.35,256.35,0,0,1,36.55-14.2q32.17.81,64.43.62c15.23-.09,30.42-.5,45.65-1q13.49-.47,26.94-1.39A7.47,7.47,0,0,1,952.91,337.66Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M771.42,337.91c6,.27,12,.43,17.94.68,0,0,.06,0,.08,0a.07.07,0,0,1,0,.08,2,2,0,0,0,3.94.05l21.34.58s0,0,0,0a.05.05,0,0,0,0,.05,256.35,256.35,0,0,0-36.55,14.2,72.38,72.38,0,0,0-6.69,3.72l-.3.19-1.12.67c-.08.05-.13,0-.13-.06l-.28-7.91,0-4C769.67,343.19,770.36,341.18,771.42,337.91Zm10.93,5.34a1.9,1.9,0,0,0-2-1.8h0a1.9,1.9,0,0,0-2,1.8h0a1.9,1.9,0,0,0,2,1.81h0a1.9,1.9,0,0,0,2-1.81Z"
          transform="translate(-684.84 -194.92)"
        />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M793.41,338.75a2,2,0,0,1-3.94-.05l.11-.16a.16.16,0,0,1,.17-.07,5.3,5.3,0,0,0,1.31.18A14.08,14.08,0,0,1,793.41,338.75Z"
          transform="translate(-684.84 -194.92)"
        />
        <ellipse className="cls-12" cx="95.53" cy="148.33" rx="1.98" ry="1.8" />
        <motion.path
          variants={svgPathVariant}
          initial="hidden"
          animate="visible"
          className="cls-12"
          d="M771.59,358.08a1,1,0,0,0-.31-.56l.3-.19.27.11a.24.24,0,0,0,.2,0,.27.27,0,0,1,.35,0,.32.32,0,0,0,.25.05,4.16,4.16,0,0,1,.67-.13c4.71.09,9.49,0,14.12,0q101,0,202,0c1.77,0,4.54.12,6.82,0,.52,0,1,.14,1.5.1a14.75,14.75,0,0,1,2.11-.06"
          transform="translate(-684.84 -194.92)"
        />
      </motion.svg>
    </div>
  );
};

export default Logo;
