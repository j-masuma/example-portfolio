


import  Button  from 'react-bootstrap/Button';
import hero from '../assets/images/Banner Image.png';
function HeroSection() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-lg-6 col-sm-12 p-4' >
            <h3 className='p-4'>Hi, Its me</h3>
            <h1 className='p-4'>JAVARIA MASOOMA</h1>
            <h3 className='p-4'>I am a Frontend Developer</h3>
            <h5 className='p-4'>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</h5>
            <Button className='btn btn-warning' type="submit">Hire Me</Button>
        </div>
        <div className='col col-lg-6 col-sm-12' >
        <img
          height={500}
          className="d-block w-100"
          src={hero}
          alt="hero"
        />
        </div>
      </div>

    </div>

  );
}

export default HeroSection;