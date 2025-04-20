import { Carousel } from 'react-bootstrap';
import imghero1 from '../../assets/img/hero-carousel/hero-carousel-1.jpg';
import imghero3 from '../../assets/img/hero-carousel/hero-carousel-3.jpg';

function HeroCarousel() {
  return (
    <Carousel fade interval={5000}> {/* interval is in milliseconds */}
      <Carousel.Item>
        <img className="d-block w-100" src={imghero1} alt="slide 1" />
        <Carousel.Caption>
          <h2>مرحبًا بكم في ميديسينا</h2>
          <p>
            نحن في <strong>ميديسينا</strong> نقدم خدمات طبية شاملة ومتميزة لضمان راحتكم وصحتكم. فريقنا الطبي ملتزم بتقديم أفضل رعاية صحية باستخدام أحدث التقنيات.
          </p>
          <a href="#about" className="btn-get-started">للمزيد</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={7000}> {/* different interval for this one */}
        <img className="d-block w-100" src={imghero3} alt="slide 2" />
        <Carousel.Caption>
          <h2>رعاية طبية متكاملة</h2>
          <p>نحن نؤمن بأهمية تقديم خدمات طبية متميزة وشاملة تلبي احتياجاتكم الصحية بأعلى معايير الجودة.</p>
          <a href="#about" className="btn-get-started">اقرأ المزيد</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={imghero3} alt="slide 3" />
        <Carousel.Caption>
          <h2>التزامنا بصحتكم</h2>
          <p>في ميديسينا، نعمل جاهدين لضمان تقديم أفضل رعاية طبية لكم ولعائلاتكم، مع التركيز على الثقة والراحة.</p>
          <a href="#about" className="btn-get-started">اقرأ المزيد</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
