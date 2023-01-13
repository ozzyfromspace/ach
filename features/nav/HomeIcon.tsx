import { motion, Variants } from 'framer-motion';

const HomeIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 550 550"
      version="1.1"
    >
      <motion.path
        initial="initial"
        animate="animate"
        variants={pathVariants}
        d="M 286.832 69.685 L 259.500 95.369 228.500 124.509 L 197.500 153.648 129.500 217.506 L 61.500 281.364 40.319 301.253 L 19.137 321.141 17.569 323.535 L 16 325.930 16 327.490 L 16 329.050 18.737 330.090 L 21.473 331.130 70.466 332.503 L 119.458 333.875 119.931 333.403 L 120.404 332.930 116.702 325.448 L 113 317.967 113 313.089 L 113 308.211 115.085 301.355 L 117.169 294.500 120.690 288 L 124.212 281.500 129.057 274.943 L 133.903 268.386 153.195 249.943 L 172.488 231.500 180.750 223.566 L 189.013 215.633 253.688 217.331 L 318.363 219.030 318.671 219.338 L 318.979 219.646 326.562 241.073 L 334.145 262.500 335.712 266.223 L 337.279 269.945 328.449 279.223 L 319.619 288.500 310.051 300 L 300.482 311.500 294.077 320.500 L 287.671 329.500 285.933 331.500 L 284.195 333.500 281.975 337.500 L 279.754 341.500 275.220 349.493 L 270.685 357.485 266.846 365.834 L 263.007 374.183 260.068 382.958 L 257.128 391.732 255.564 399.977 L 254 408.221 254 418.951 L 254 429.680 255.935 437.244 L 257.869 444.808 260.373 449.654 L 262.878 454.500 267.312 460.070 L 271.747 465.640 278.123 470.472 L 284.500 475.304 292.794 479.221 L 301.088 483.138 310.414 485.503 L 319.740 487.869 328.120 489.059 L 336.500 490.249 354 490.247 L 371.500 490.245 382 489.074 L 392.500 487.903 404.500 485.903 L 416.500 483.904 432.629 480.009 L 448.757 476.114 462.421 471.988 L 476.084 467.861 492.292 461.843 L 508.500 455.825 511.891 454.986 L 515.281 454.147 516.520 452.824 L 517.758 451.500 519.381 441 L 521.004 430.500 524.047 413 L 527.090 395.500 528.601 389.640 L 530.112 383.780 529.806 381.149 L 529.500 378.517 527.708 378.177 L 525.916 377.837 514.208 389.797 L 502.500 401.757 493 408.769 L 483.500 415.781 474.500 420.856 L 465.500 425.931 455.730 430.009 L 445.961 434.087 434.730 436.987 L 423.500 439.887 415.097 441.081 L 406.693 442.275 394.097 441.714 L 381.500 441.153 373.500 439.086 L 365.500 437.020 356 432.360 L 346.500 427.700 338.416 419.600 L 330.332 411.500 326.735 404.254 L 323.138 397.007 321.438 389.364 L 319.737 381.720 320.258 370.110 L 320.780 358.500 323.505 350 L 326.230 341.500 331.078 331.500 L 335.926 321.500 341.713 313.568 L 347.500 305.635 348.602 305.284 L 349.704 304.932 354.906 319.716 L 360.108 334.500 361.125 337.129 L 362.142 339.758 367.821 340.342 L 373.500 340.927 410.863 341.608 L 448.225 342.290 447.231 340.395 L 446.236 338.500 443.008 331.556 L 439.780 324.613 425.832 292.179 L 411.883 259.746 412.333 258.574 L 412.783 257.401 422.142 254.232 L 431.500 251.063 439.843 248.986 L 448.187 246.910 459.093 245.769 L 470 244.629 481.250 245.970 L 492.500 247.312 497.500 247.406 L 502.500 247.500 502.819 245.252 L 503.139 243.003 496.859 234.252 L 490.580 225.500 473.627 202 L 456.674 178.500 455.587 177.765 L 454.500 177.031 453.326 177.015 L 452.152 177 440.826 184.662 L 429.500 192.324 411.867 205.511 L 394.234 218.698 388.781 206.099 L 383.329 193.500 352.018 120.500 L 320.708 47.500 318.743 45.750 L 316.778 44 315.471 44 L 314.163 44 286.832 69.685 M 275.996 133.329 L 267.500 141.565 254.500 153.839 L 241.500 166.112 269.668 165.806 L 297.837 165.500 298.455 164.880 L 299.072 164.261 292.374 145.380 L 285.676 126.500 285.084 125.796 L 284.492 125.092 275.996 133.329"
        stroke="none"
        fill="hsla(211,83%,30%,90%)"
        fillRule="evenodd"
      />
    </motion.svg>
  );
};

const pathVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default HomeIcon;