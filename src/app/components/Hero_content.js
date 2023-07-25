import { MdArrowCircleRight } from "react-icons/md";
import style from '@/app/styles/hero_content.module.css';
export const Hero_content = () => {
  return (
    <div className={style.hero_content}>
        <h1 className={style.heading}>Websites done right</h1>

        <h4 className={style.heading_two}>I am a web developer from india, (BIHAR) and currently living in DELHI. I enjoy building everything from small business sites to rich interactive web apps. </h4>
        
        <div className={style.btns_grps}>
            <button className={style.btn}>WEBSITE <MdArrowCircleRight/></button>
            <button className={style.btn}>I'AM FRESHERS  <MdArrowCircleRight/></button>
        </div>
    </div>
  )
}
