import { Link } from "react-router-dom";
import teachersImg from "../../assets/67.png";

import SectionTitle from "../title/SectionTitle";
import Button from "../button/Button";

const TeachersSection = () => {
  return (
    <div className="page py-16 sm:py-24 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="flex flex-col items-center lg:flex-row justify-center gap-12">
        <div className="w-full max-w-[600px] h-[220px] sm:h-[320px] md:h-[400px] p-1.5 bg-white shadow-custom rounded-2xl">
          <img src={teachersImg} alt="Наши преподаватели" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="w-full max-w-[500px]">
          <SectionTitle className="text-start">
            Наши преподаватели
          </SectionTitle>
          <p className="text-base my-2">
            В E|C Инженерном колледже обучение ведут преподаватели, сочетающие глубокие академические знания и практический опыт. Среди них — специалисты с учеными степенями, включая PhD, а также эксперты с многолетним опытом работы в сфере информационных технологий, инженерии и других технических направлений. Используя современные методы обучения и индивидуальный подход, они помогают студентам получить фундаментальные знания, развить практические навыки и подготовиться к успешной профессиональной карьере.
          </p>
          <Link to={"/about#teachers"}>
            <Button className="uppercase bg-n-blue text-white relative">
              <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
              Узнать о преподавателях
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeachersSection;
