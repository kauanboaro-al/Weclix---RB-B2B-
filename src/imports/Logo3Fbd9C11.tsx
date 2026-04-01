import svgPaths from "./svg-d385a0q00l";
import { imgGroup } from "./svg-hdpr8";

function Group() {
  return (
    <div
      className="absolute bottom-0 left-[0.39%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[126px_36px] right-[0.39%] top-0"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 36">
        <g id="Group">
          <path d={svgPaths.p18526640} fill="var(--fill-0, #E8DA00)" id="Vector" />
          <path d={svgPaths.p32e6e4f0} fill="var(--fill-0, #E8DA00)" id="Vector_2" />
          <path d={svgPaths.p13c3d700} fill="var(--fill-0, #E8DA00)" id="Vector_3" />
          <path d={svgPaths.p1656a580} fill="var(--fill-0, #E8DA00)" id="Vector_4" />
          <path d={svgPaths.p2ef01900} fill="var(--fill-0, #E8DA00)" id="Vector_5" />
          <path d={svgPaths.p1ab52c00} fill="var(--fill-0, #E8DA00)" id="Vector_6" />
          <path d={svgPaths.p3edfcb80} fill="var(--fill-0, #E8DA00)" id="Vector_7" />
          <path d={svgPaths.p245ed700} fill="var(--fill-0, #1CB4AB)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.39%] right-[0.39%] top-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function Logo3Fbd9C11() {
  return (
    <div className="relative size-full" data-name="logo.3fbd9c1 1">
      <ClipPathGroup />
    </div>
  );
}