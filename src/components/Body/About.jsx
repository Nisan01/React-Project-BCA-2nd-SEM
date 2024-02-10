import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import "./bodycss.css";

const TEXTS = [
  "Hi,",
  "I am Nishan kiran Chauhan.",
  "I am a travel film maker.",
  "I would love to make videos",
  "Once I was a beginner too",
  "I started watching thousands,",
  "and thousands of tutorials,",
  "To be here..",
];
const textStyles = {
  fontFamily: "Arial, sans-serif", // Change this to the desired font family
};

const paragraphstyles = {
  WebkitLineClamp: 5,
  webkitboxorient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};
const videostyle = {
  WebkitLineClamp: 5,
  webkitboxorient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

function Aboutpg() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000 // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="intro">
        <div className="header-title">
          <img src="txt.png" alt="" />
        </div>

        <div className="intro-both-parts">
          <div className="text-part">
            <p className="custom-font">
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </p>
          </div>
          <div className="img-card">
            <img src="paint.jpg" alt="" />
          </div>
        </div>
      </div>

      <span className="title-text">My Gears</span>

      {/* PAGE 3 */}

      <div className="pg3-body">
        <div className="items-collection">
          <div className="box-wrapper1">
            <div className="box">
              <div className="box-container">
                <img src="a6400.png" />
              </div>

              <div className="content">
                <h4>Camera</h4>
                <h1>Sony A6400</h1>
                <p>
                  Sony's a6400 is a compact 24MP mirrorless interchangeable lens
                  camera with an APS-C sensor that will serve plenty of
                  photographers from family documentarians to pro shooters
                  looking for a lightweight second body.
                </p>
              </div>
              <div className="footer">
                <div>
                  <h4 id="price">Price</h4>
                  <p id="rs">Rs.135000</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-container">
                <img src="dji.png" />
              </div>

              <div className="content">
                <h4>Drone</h4>
                <h1>Dji Mavic Mini</h1>
                <p>
                  The DJI Mavic Mini is a compact and portable drone that packs
                  impressive features into its lightweight design. Here are the
                  key specifications: Weight: It weighs just 249 grams, making
                  it easy to carry and fly.
                </p>
              </div>
              <div className="footer">
                <div>
                  <h4 id="price">Price</h4>
                  <p id="rs">Rs.50000</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-container">
                <img src="gopro.png" id="gopro" />
              </div>

              <div className="content">
                <h4>Gopro</h4>
                <h1>Gopro Hero 11</h1>
                <p>
                  HERO11 Black not only features the largest image sensor we’ve
                  ever had on a GoPro—clocking in at 1/1.9”—but it unlocks an
                  entirely new aspect ratio. GoPro cameras have always featured
                  a sensor capable of a 4:3 ratio..
                </p>
              </div>
              <div className="footer">
                <div>
                  <h4 id="price">Price</h4>
                  <p id="rs">Rs.74500</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-wrapper2">
            <div className="box">
              <div className="box-container">
                <img src="m2s.png" id="m2s" />
              </div>

              <div className="content">
                <h4>Gimbal</h4>
                <h1>Zhiyun M2s</h1>
                <p>
                  Zhiyun Crane M2S Gimbal Stabilizer For Smartphone Mirrorless
                  DSLR Camera Action ..
                </p>
              </div>
              <div className="footer">
                <div>
                  <h4 id="price">Price</h4>
                  <p id="rs">Rs.25000</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-container">
                <img src="mic.png" />
              </div>

              <div className="content">
                <h4>Wireless Mic</h4>
                <h1>Hollyland Mic</h1>
                <p>
                  Hollyland Lark M1, a wireless microphone system with noise
                  cancellation that delivers crystal-clear audio for your...
                </p>
              </div>
              <div className="footer">
                <div>
                  <h4 id="price">Price</h4>
                  <p id="rs">Rs.25000</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-container">
                <img src="lens.png" id="gopro" />
              </div>

              <div className="content">
                <h4>Lens</h4>
                <h1>Sony 35mm Apsc</h1>
                <p>One of the best lens for apsc sony cameras which is ..</p>
              </div>
              <div className="footer">
                <div>
                  <h4 id="price">Price</h4>
                  <p id="rs">Rs.40000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="photography-ideas">
          <h1 class="elegantshadow" id="good-text">
            Photography Tips
          </h1>

          <div className="image-wrapper">
            <p id="title-photography">1. Use the Camera You Already Have</p>
            <div className="image-text">
              <img src="tajmahal.jpg" alt="" id="tajmahal" />
              <p>
                Taken with the Nikon Z50, an entry-level mirrorless camera
                <br />
              </p>
            </div>
            <div
              className="text-part"
              id="text"
              style={isOpen ? null : paragraphstyles}
            >
              <p id="description">
                Camera gear is not all that important. There are countless
                cameras, lenses, and other accessories on the market today. We
                spend a lot of time reviewing them at Photography Life, and it’s
                true that some are better than others (or better suited for a
                given job). But once you’ve tested enough of them, the real
                takeaway is that pretty much everything today is excellent. The
                differences are almost always minor, especially at a given
                price. So, use the camera you already have, and don’t look back.
                In almost every way, today’s entry-level mirrorless cameras are
                better than the top-of-the-line film SLRs or even the DSLRs of
                ten years ago. Yet, somehow those film photographers managed to
                capture beautiful, iconic photos that still look great today.
                Much more important are your creative skills and knowledge of
                camera settings. Focus your effort on those, not on collecting
                camera equipment.
                <br />
              </p>
              <div className="text-image-wrapper">
                <p id="title-photography">2. Learn Which Settings Matter</p>
                <img src="sky.jpg" id="sky" />
                <p>
                  To capture photos like this, it helps to have an intimate
                  understanding of camera settings. Two-exposure blend.
                </p>
              </div>
              <p>
                Learn Which Settings Matter There are a lot of camera settings,
                and it takes some practice to get them right, especially as a
                beginner. Even advanced photographers won’t always do everything
                perfectly. But it’s worth learning how to set your camera
                properly, and which camera settings matter the most, so you have
                the best chance to take the photos you want. First, try
                practicing with camera modes other than full Auto. You won’t
                learn anything if your camera is making all the decisions for
                you. It might be confusing at first, but hopefully our articles
                on aperture, shutter speed, and ISO will give you a good head
                start. Those are the three most important settings in all of
                photography. Aside from aperture, shutter speed, and ISO, learn
                how to focus properly by practicing with the different autofocus
                modes. You’ll probably prefer single-servo autofocus (also known
                as One-Shot AF) for stationary subjects, and continuous-servo
                autofocus (also known as AI Servo) for moving subjects. Don’t
                use manual focus unless it’s so dark that autofocus isn’t
                working. Lastly, shoot in Raw if you want to edit your photos,
                or think there’s any chance you’ll edit them in the future.
                JPEGs look good out of camera, but the files have much less
                latitude for post-processing. (If you aren’t sure, shoot
                RAW+JPEG, and keep the RAWs for later just in case.) See RAW vs
                JPEG for more. Sample photo from Nikon Z7 To capture photos like
                this, it helps to have an intimate understanding of camera
                settings. Two-exposure blend.
              </p>
              <div className="text-image-wrapper">
                <p id="title-photography">3. Pay Attention to the Light</p>
                <img src="butterfly.jpg" id="butterfly" />
                <p>NIKON D7000 + 105mm f/2.8 @ 105mm, ISO 800, 1/320, f/3.2</p>
              </div>
              <p>
                Probably the single most important part of photography is light.
                If you take a photo with good light, you’ve taken a huge step
                toward getting a good picture. But what counts as good light?
                It’s not all about sunsets. Often, the goal here is to balance
                the light’s intensity between your subject and background. Even
                if you’re photographing an amazing sunset, the photo could be
                ruined by a completely dark and silhouetted foreground. The
                easiest way to solve this is to pay attention to the direction
                and softness of the light. If the light is too harsh, you could
                get bad shadows going across your subject, which is especially a
                problem for portrait photography. If the light is coming from an
                unflattering angle, see what you can do to move the light source
                (in a studio) or move the subject (outdoors) – or wait until the
                light is better (landscape photography). Also, if you’re taking
                handheld pictures, make sure there is enough light. If not, use
                a flash or move where it’s brighter. The easiest way to get
                bland, discolored photos is to shoot in environments without
                enough light.
              </p>
              <div className="text-image-wrapper">
                <p id="title-photography">4. Don’t Overexpose Highlights</p>
                <img src="highlights.jpg" id="highlights" />
                <p>NIKON D800E + 24mm f/1.4 @ 24mm, ISO 100, 6/10, f/16.0</p>
              </div>
              <p>
                Probably the single most important part of photography is light.
                If you take a photo with good light, you’ve taken a huge step
                toward getting a good picture. But what counts as good light?
                It’s not all about sunsets. Often, the goal here is to balance
                the light’s intensity between your subject and background. Even
                if you’re photographing an amazing sunset, the photo could be
                ruined by a completely dark and silhouetted foreground. The
                easiest way to solve this is to pay attention to the direction
                and softness of the light. If the light is too harsh, you could
                get bad shadows going across your subject, which is especially a
                problem for portrait photography. If the light is coming from an
                unflattering angle, see what you can do to move the light source
                (in a studio) or move the subject (outdoors) – or wait until the
                light is better (landscape photography). Also, if you’re taking
                handheld pictures, make sure there is enough light. If not, use
                a flash or move where it’s brighter. The easiest way to get
                bland, discolored photos is to shoot in environments without
                enough light.
              </p>
            </div>

            <div class="button-borders">
              <button class="primary-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Read Less" : "Read More..."}
              </button>
            </div>
          </div>
        </div>
        <h1 class="elegantshadow" id="good-text">
          Videography Tips
        </h1>

        <div className="videography-ideas">
          <div className="text-image-wrapper">
            <p id="title-photography">1. Shoot in Manual </p>
            <img src="video1.jpg" id="video1" />
          </div>

          <div
            className="textart"
            id="text1"
            style={isOpenVideo ? null : videostyle}
          >
            <p>
              Probably the single most important part of photography is light.
              If you take a photo with good light, you’ve taken a huge step
              toward getting a good picture. But what counts as good light? It’s
              not all about sunsets. Often, the goal here is to balance the
              light’s intensity between your subject and background. Even if
              you’re photographing an amazing sunset, the photo could be ruined
              by a completely dark and silhouetted foreground. The easiest way
              to solve this is to pay attention to the direction and softness of
              the light. If the light is too harsh, you could get bad shadows
              going across your subject, which is especially a problem for
              portrait photography. If the light is coming from an unflattering
              angle, see what you can do to move the light source (in a studio)
              or move the subject (outdoors) – or wait until the light is better
              (landscape photography). Also, if you’re taking handheld pictures,
              make sure there is enough light. If not, use a flash or move where
              it’s brighter. The easiest way to get bland, discolored photos is
              to shoot in environments without enough light.
            </p>

            <div className="text-image-wrapper">
              <p id="title-photography">2. Shutter Angle</p>
              <img src="video2.jpg" id="butterfly" />
            </div>
            <p>
              To avoid motion blur or noticeable strobing, you’ll need to know
              something about shutter angle. This isn’t the same as shutter
              speed. It’s the angle of degrees that in film motion cameras a
              disc passes in front of where the physical film itself is moving
              through. Depending on its angle, the disc will block out a certain
              amount of the light exposed on the film. For example, a standard
              shutter angle of 180 degrees would be a semi-circle disc rotating
              in front of what is called the film gate. Now, in simple
              DSLR/Mirrorless video terms, the physical mechanics might be a
              little different yet the principal remains the same. As a simple
              guide, double whatever your chosen frame rate is to work out what
              your ideal shutter speed should be and you shouldn’t have any
              blurring or strobing issues. So, at 24fps, if you wanted to
              capture images that look film-normal, you’d select a shutter speed
              of 1/48th of a second. If you’re shooting 30 fps, double that
              number and choose a shutter speed of 1/60. You may already know
              that many DSLR cameras don’t have a lot of flexibility in their
              pre-set settings when it comes to selecting specific shutter
              speeds. You can use the Magic Lantern firmware that does give you
              more available settings, such as 1/48 but if not, then select the
              closest option there is, usually 1/50, and this will work for
              24fps. And of course, this is perfect for 25fps.
            </p>
            <div className="text-image-wrapper">
              <p id="title-photography">
                3. Frame Rates Continued – Slow Motion
              </p>
              <img src="video3.jpg" id="slowmotion" />
            </div>
            <p>
              My output format tends to be 24fps, but I will use higher frame
              rates for slow motion in post. 30fps – If your output format is
              24fps, you can slow 30fps files down 20% in-post (30*.20=24fps).
              60fps – You can slow it down 60% in-post. I’ll also use 30fps for
              panning and some other movements because it looks cleaner and
              sharper when slowed down in-post. Higher frame rates are also
              useful for bright days outdoors when you need to let in less light
              to maintain the proper shutter angle. Even when using an ND
              filter, sometimes it’s necessary if you want a shallow depth of
              field. Speaking of which…
            </p>
            <div className="text-image-wrapper">
              <p id="title-photography">4. ND filters</p>
              <img src="video4.jpg" id="nd" />
            </div>
            <p>
              Using a Neutral Density (ND) filter can help reduce the amount of
              light entering the lens and onto the camera chip. This can be
              useful if you’re shooting on a bright day and want keep the
              aperture wide open to help achieve a shallow depth of field, which
              may help give what is generally considered more of a cinematic
              look in the world of video. If you don’t have an ND filter in
              front of your lens, to avoid over-exposure when working in bright
              light, you’ll need to close up the aperture (when the numbers go
              up!) and there’s a visual consequence to this. You’ll lose that
              shallow depth of field that helps separate your principal subject
              and the rest. More of your background and foreground will appear
              in focus and on the same focal plane.
            </p>
            <div className="text-image-wrapper">
              <p id="title-photography">5. Video Picture Profiles</p>
              <img src="video5.jpg" id="slog" />
            </div>
            <p>
              Picture profile (or picture style) settings determine the
              characteristics of your image, including colour tones, brightness,
              and contours. Their primary uses are: • To maximise the dynamic
              range in an image • To achieve a specific look Although they’re
              complicated to fully understand (the word ‘matrix’ comes up a
              lot), they’re important to get right. In most cases, you can set
              up a preset once and forget about it. When picking a picture
              style, the first question you need to ask yourself is whether or
              not your footage is going to be colour graded. Colour grading can
              achieve stunning results, but it’s far more complex and
              time-consuming than a preset look. ​ I’ll assume that if you’re
              going to have your video colour graded, then you already
              understand the work involved. You can, however, also get great
              results by combing the right picture profile, good lighting, and
              correct exposure. For a quick start guide to camera-setups, see
              this post. To get a good result without colour grading, you’ll
              want to find a preset that offers a ‘finished’ look that you like.
              This doesn’t mean you won’t tweak the levels later on, but you
              won’t have to drastically change the feel of your image in post
              production.
            </p>
          </div>

          <div class="button-borders">
            <button
              class="primary-button"
              onClick={() => setIsOpenVideo(!isOpenVideo)}
            >
              {isOpenVideo ? "Read Less" : "Additional..."}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpg;
