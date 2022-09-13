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
      <div class="title">Listening Party</div>
      <div class="intro">
        An enhanced todo list that allows users to store and manage
        yet-to-listen albums.
      </div>
      <div class="project-stack">
        <span>Vue 3</span>
        <span>Vuex</span>
        <span>Firebase</span>
        <span>Tailwind CSS</span>
        <span>Netlify</span>
      </div>
      <div class="live-site">
        <a href="https://sage-bombolone-9d887b.netlify.app/" target="_blank"
          >Live site</a
        >
      </div>
    </div>
    <div class="project-snap">
      <img src="../assets/images/soulmate.png" alt="" />
    </div>
    <div class="body-section">
      <div class="bodytext purpose">
        <h4>Purpose and Inspirations</h4>
        <p>
          The inspiration for this project came from a minor inconvenience that
          I encountered. I’m a massive fan of music. I started an album review
          blog in college and it’s still ongoing. Recently I started finding it
          more challenging to keep track of all the albums to review and listen
          to. So I created a simple to-do list to keep track of my albums with
          listening status.
          <br /><br />

          I wanted to take this opportunity to learn some new tools. So I
          decided to build this full-stack project with frameworks and tools
          that I have not used before. This project was built using Vue 3
          Composition API, Tailwind CSS, and Firebase for the database.
        </p>
      </div>
      <div class="bodytext problem">
        <h4>Problems Encountered</h4>
        <p>
          I encountered quite a few problems during the creation of this
          project. This is the first time that I’m using Vue 3 and Firebase to
          build a full-stack app.
          <br /><br />

          For the backend component, everything is pretty new to me so the
          issues I had were all due to me learning them for the first time. When
          I started this project, version 9 of Firebase had just been released.
          The change from v8 to v9 is very significant. The setup, as well as
          the code style, have all been changed. This means that a lot of
          resources and tutorials are not applicable since they were mostly for
          v8. I had to rely solely on Firebase’s documentation to learn how to
          operate Firebase. The biggest issue I encountered was image upload. My
          initial method was to convert the image to b64 and store it in the
          Firebase database. This didn’t work as the b64 was too big to store.
          To resolve this, I learned to utilize Firestore. My eventual solution
          is to upload the image to Firestore, then use the getDownloadURL()
          function from the Firestore library to produce an image link, which is
          then uploaded with the rest of the album info.
          <br /><br />
          For the frontend component, I had previously completed a project using
          Vue 2. However, Vue 3 has some pretty significant differences from Vue
          2 with the new composition API. The most challenging part is
          understanding the new setup() function as well as ref. I spent a lot
          of time understanding core knowledge of Vue 3 such as how setup() is
          replacing certain Vue 2 lifecycle methods like Created() and Before
          create, as well as the difference between ref and reactive, the new
          Watch method, etc. It was a pleasant experience as I spent so much
          time reading the documentation, it really felt like I have a good
          grasp and solid understanding of composition API.
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


