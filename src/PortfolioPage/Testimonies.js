import React from "react";
import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Testimonies = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Icon1 id="prevBtn" className={className} onClick={onClick}>
        <AiOutlineLeft />
      </Icon1>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Icon2 id="nextBtn" className={className} onClick={onClick}>
        <AiOutlineRight />
      </Icon2>
    );
  }

  const settings = {
    dots: null,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container id='Testimomny'>
      <Wrapper>
        {/* <Slider {...settings}> */}
        <Holder>
          <Inner>
            <Img src="/images/2p.png" />
            <Name>Anonimous</Name>
            <Text>
            With Timothy's help, we were able to increase the functionality of our website dramatically. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Timothy!😃
            </Text>
          </Inner>
        </Holder>
        <Holder>
          <Inner>
            <Img src="/images/2p.png" />
            <Name>A-C-S</Name>
            <Text>
            We re-did our website twice in a 12 month period. There was no comparison between the first developer and Timothy. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Tim the first time I would not have had to do it twice.
            </Text>
          </Inner>
        </Holder>
        <Holder>
          <Inner>
            <Img src="/images/2p.png" />
            <Name>Keen Service</Name>
            <Text>
            We at Keen Service were very impressed with the all aspects of our new website. We would highly reccomend Timothy's Services to anyone looking to build a new website.
            </Text>
          </Inner>
        </Holder>
        <Holder>
          <Inner>
            <Img src="/images/2p.png" />
            <Name>Bekkee Enterprise </Name>
            <Text>
            Expertise and systematic approach to fulfilling client needs.
            </Text>
          </Inner>
        </Holder>
        {/* </Slider> */}
      </Wrapper>
    </Container>
  );
};

export default Testimonies;

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  position: relative;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Holder = styled.div`
  /* margin-left: 20px;
  margin-right: 20px; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const Image = styled.img`
  background: red;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
`;

const Icon1 = styled.div`
  border: 1px solid #e9204f;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  transition: 350ms;
  align-items: center;
  justify-content: center;
  color: #e9204f;
  cursor: pointer;
  :hover {
    background: #e9204f;
    color: white;
  }
`;

const Icon2 = styled.div`
  border: 1px solid #e9204f;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  transition: 350ms;
  align-items: center;
  justify-content: center;
  color: #e9204f;
  z-index: 1;
  cursor: pointer;
  :hover {
    background: #e9204f;
    color: white;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 90px;
  width: 90px;
  object-fit: cover;
  border-radius: 100%;
`;

const Name = styled.div`
  font-family: "Dosis", "sans-serif";
  font-weight: 800;
  font-size: 28px;
  margin-top: 10px;
`;

const Text = styled.div`
  text-align: center;
  font-size: 18px;
  color: #393939;
  max-width: 80%;
  line-height: 30px;
  margin-top: 25px;
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// import React from "react";
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const Testimonies = () => {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     slidesToShow: 1,
//     speed: 500,
//     autoPlay: true,
//   };
//   return (
//     <Container>
//       {" "}

//       <Wrapper>
//         <Slider {...settings}>
//           <Holder>
//             <Image src="/images/1.png" />
//           </Holder>
//           <Holder>
//             <Image src="/images/2.png" />
//           </Holder>
//           <Holder>
//             <Image src="/images/3.png" />
//           </Holder>
//           <Holder>
//             <Image src="/images/4.png" />
//           </Holder>
//           <Holder>
//             <Image src="/images/5.png" />
//           </Holder>
//           <Holder>
//             <Image src="/images/6.png" />
//           </Holder>
//         </Slider>
//       </Wrapper>

//     </Container>
//   );
// };

// export default Testimonies;

// const Container = styled.div`
//   /* width: 100%;
//   background: white;
//   display: flex;
//   position: relative;
//   justify-content: center; */
//   width: 100%;
//   height: 95vh;
//   background: aquamarine;
// `;

// const Wrapper = styled.div`
//   width: 70%;
//   display: flex;
//   align-items: center;
//   margin-top: 120px;
//   overflow: hidden;
// `;

// // const Slider = styled.div`
// //   min-width: 1000px;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// // `;

// const Holder = styled.div``;

// const Image = styled.img``;

// //  <Slider>
// //           <Img src="/images/1.png" />
// //           <Name>Zhon Willams</Name>
// //           <Text>
// //             Taking thsimplifying complex contact pages even further, we have
// //             Scribd. The online publishing company provides a grand total of
// //             eight different types of inqury, allowing it to relevant contact
// //             form or page of the site.
// //           </Text>
// //         </Slider>
// //         <Slider>
// //           <Img src="/images/2.png" />
// //           <Name>Zhon Willams</Name>
// //           <Text>
// //             Taking thsimplifying complex contact pages even further, we have
// //             Scribd. The online publishing company provides a grand total of
// //             eight different types of inqury, allowing it to relevant contact
// //             form or page of the site.
// //           </Text>
// //         </Slider>
// //         <Slider>
// //           <Img src="/images/3.png" />
// //           <Name>Zhon Willams</Name>
// //           <Text>
// //             Taking thsimplifying complex contact pages even further, we have
// //             Scribd. The online publishing company provides a grand total of
// //             eight different types of inqury, allowing it to relevant contact
// //             form or page of the site.
// //           </Text>
// //         </Slider>
// //         <Slider>
// //           <Img src="/images/4.png" />
// //           <Name>Zhon Willams</Name>
// //           <Text>
// //             Taking thsimplifying complex contact pages even further, we have
// //             Scribd. The online publishing company provides a grand total of
// //             eight different types of inqury, allowing it to relevant contact
// //             form or page of the site.
// //           </Text>
// //         </Slider>
