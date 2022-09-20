<style lang="scss">
.content-container {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  .resume-section {
    margin: 50px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .resume {
      font-size: 1.4rem;
      font-weight: 700;
    }
    .click {
      color: $main-orange;
      font-weight: 700;
      font-size: 1.3rem;
      &:hover {
        color: $wheat;
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .about-section {
    .para-header {
      font-size: 1.6rem;
      margin: 30px 0;
    }
    .para {
      font-size: 1.2rem;
      line-height: 150%;
    }
  }
}

@media (min-width: $breakpoint-tablet) {
  .content-container {
    width: 60%;
    .about-section {
      .para-header {
        font-size: 1.7rem;
        margin: 30px 0;
      }
      .para {
        font-size: 1.3rem;
        line-height: 160%;
      }
    }
  }
}
</style>

<template>
  <div>
    <Navbar />
  </div>
  <div class="content-container" id="about-landing">
    <div class="resume-section">
      <div class="resume">Looing for my resume? &nbsp;</div>
      <div><a href="" class="resume click">Click Here</a></div>
    </div>
    <div class="about-section">
      <h4 class="para-header">A little about myself</h4>
      <p class="para first">
        My first encounter with a programming language began with an Amazon gift
        card. My first job out of college was hosting a SQL boot camp, where
        upon completion you'd receive a hundred dollars Amazon gift card. This
        boot camp was intended for engineers, however, the gift card and my
        passion for learning new things made it a no-brainer that I'd enroll in
        this boot camp. <br /><br />Since it was intended for people with a
        coding foundation, the course was very advanced. This means a person
        with 0 coding experience like myself would have to spend the entire
        weekend in a coffee shop working on homework and catching up. I'm not
        gonna lie, the 8 weeks of boot camp seemed like hell, and I was ready to
        quit every second. But I didn't. It might be the sense of achievement
        when I finally successfully ran my query search, or I was finding a lot
        of joy during the process, either way, I completed the boot camp.
        <br /><br />I fell in love with the ability to problem solve and create
        with programming languages, and remember thinking to myself how awesome
        it'd be if I can do this for a living. Fast forward a year later, I
        decided to pursue this dream and the rest is history.
      </p>
      <h4 class="para-header">Why should you hire me?</h4>
      <p class="para second">
        So let's fast-forward to the part that you're interested in: What can I
        offer? <br /><br />With my extensive experience working in tech
        startups, I excel in a fast-paced, high-pressure environment. I'm quick
        to adapt to any changes and can juggle multiple tasks and roles well. My
        biggest strength is responsibility. I take ownership of what I do and
        constantly contribute with new ideas and ways to optimize. I believe it
        is because of this attitude that I was promoted to run a 7 people team
        within 8 months of my first job out of college. <br /><br />I understand
        that not coming from a CS background means that I have to work twice as
        hard to catch up. I'm constantly learning about new tech and am a very
        motivated learner.
      </p>
    </div>
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  setup() {},
  components: {
    Footer,
    Navbar,
  },
};
</script>