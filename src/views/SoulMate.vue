 <style lang="scss">
.project-container {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  .title-section {
    margin-top: 50px;
    .title {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .intro {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
    .project-stack {
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      span {
        background-color: black;
        color: $white;
        border-radius: 5px;
        padding: 8px 10px;
        font-size: 1rem;
        margin-right: 5px;
        margin-bottom: 5px;
      }
    }
    .live-site {
      margin-bottom: 20px;
      a {
        font-size: 1.5rem;
        font-weight: 700;
        color: $main-orange;
        &:hover {
          color: $brown;
          transition: 0.2s ease-in-out;
        }
      }
    }
  }
  .video-container {
    widows: 100%;
    display: flex;
    iframe {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .body-section {
    margin-top: 50px;
    .bodytext {
      margin-bottom: 30px;
      h4 {
        font-size: 2.2rem;
        margin-bottom: 20px;
        font-weight: 700;
      }
      p {
        font-size: 1.2rem;
        line-height: 140%;
      }
    }
  }
}
</style>

<template>
  <div id="top">
    <Navbar />
  </div>
  <div class="project-container">
    <div class="title-section">
      <div class="title">Soul Mate</div>
      <div class="intro">
        A Tinder-like app that gives musicians looking to start a band a
        platform to find their dream band mate.
      </div>
      <div class="project-stack">
        <span>React</span>
        <span>Sass</span>
        <span>MongoDB</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>JWT</span>
        <span>Bcrypt</span>
        <span>AWS</span>
        <span>Elastic Beanstalk</span>
        <span>Netlify</span>
      </div>
      <div class="live-site">
        <a href="https://timely-cascaron-c06107.netlify.app/" target="_blank"
          >Live site</a
        >
      </div>
      <div class="live-site">
        <a href="https://github.com/VinceLee9527/soulmate_mern" target="_blank"
          >Github</a
        >
      </div>
    </div>
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/31aY5vbQTBs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="body-section">
      <div class="bodytext instructions">
        <h4>Instructions</h4>
        <h3>Test Logins:</h3>
        <p>
          Account: test@gmail.com<br />
          Password: 123
        </p>
      </div>
      <div class="bodytext purpose">
        <h4>Purpose and Inspirations</h4>
        <p>
          The inspiration for this project came from an issue that I faced. As a
          guitar player, I???d love to start a band or find other instrument
          players to jam with. However, there are just not many ways to connect
          with other musicians. I designed this app with the intention of
          creating a platform for musicians to connect with one another.<br /><br />
          This app is based on the functionality of Tinder. It consists of a
          login/signup page, an edit profile page, and finally the swiper and
          chat section. For detailed demo of each components please view the
          video demo above.
        </p>
      </div>
      <div class="bodytext problem">
        <h4>Problems Encountered</h4>
        <p>
          I encountered quite a few problems during the creation of this
          project. This is the first time that I???m using React and MongoDB to
          build a full-stack app.<br /><br />

          For the backend component, everything is pretty new to me so the
          issues I had were all due to me learning them for the first time. This
          includes learning how to set up and use JWT token for authorization
          and bcrypt for password encryption, learning what CORS is and how to
          resolve CORS errors, and finally learning and using MongoDB CRUD
          operations. There were many hiccups along the way but they were able
          to be resolved with Stack overflow and documentation. The biggest
          blocker I had for the backend component was JWT token. I didn???t fully
          understand the concept of JWT and how it operates, so I was including
          the entire user data in the token, which includes a super big b64 for
          the profile image. This caused a major issue as the token was way too
          big to include in the response. I resolved this issue by only
          including User ID in the token, as it was unnecessary to include all
          of the user information just for authorization purposes. Another
          backend issue I faced was Heroku removing their free tier. I decided
          to use AWS as a replacement to deploy my server. I wanted to gain AWS
          hands-on experience as AWS is a very popular server option. I used
          Elastic Beanstalk to create an environment for my EC2 Instance. I
          encountered a lot of problems when setting up AWS. The biggest problem
          was not passing health-check. I configured my target group path and
          interval to avoid exceeding MongoDB connection limit.<br /><br />

          For the frontend component, even though it was my first time writing
          with React, my previous experience with VUE helped flattened the
          learning curve. The issue I encountered for the frontend component is
          far less than that of the backend. The biggest issue I ran into was
          handling picture uploads. I decided to convert the image to b64 via
          Filereader. However, an issue that I encountered was that there is a
          pretty significant size restriction for this, a file too big would
          cause an error. I resolved this by setting a verification for image
          size at the front end, which solved the problem but it???s still not
          ideal. To resolve this, I started to look for plugins that could
          either reduce file size when sent to the server or when upload
          happens. I found React Image File Resizer, a plugin that can compress
          image upon upload. This is a great solution so now I don't have to set
          a verification for image size when user uploads.
        </p>
      </div>
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


