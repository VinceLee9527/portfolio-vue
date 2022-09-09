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
      <div class="title">AC Twitter</div>
      <div class="intro">
        A Twitter clone with full Twitter functionality such as followers,
        tweets, profiles, and admin.
      </div>
      <div class="project-stack">
        <span>Vue 2</span>
        <span>Vuex</span>
        <span>Sass</span>
        <span>Socket.IO</span>
      </div>
      <div class="live-site">
        <a href="">Live site</a>
      </div>
    </div>
    <div class="project-snap">
      <img src="../assets/images/soulmate.png" alt="" />
    </div>
    <div class="body-section">
      <div class="bodytext purpose">
        <h4>Purpose and Inspirations</h4>
        <p>
          This app is the final project of the coding program Alpha Camp. This
          app is a group project, featuring 2 frontend and 2 backend engineers.
          This is a fullstack Twitter clone that has all the functions that real
          Twitter has. The frontend component was built with Vue 2 and Vuex. The
          features include Login/Signup page, main feed with tweets, followers
          section, user’s profile page with tweets and like history, and finally
          an admin page to manage users and tweets.
        </p>
      </div>
      <div class="bodytext problem">
        <h4>Problems Encountered</h4>
        <p>
          I encountered quite a few problems during the creation of this
          project. This is the first collaboration project with other engineers,
          as well as the first full-stack app.
          <br /><br />
          The biggest challenge that we faced during this project is project
          management. This is the first time any of us has worked with other
          engineers to complete a project. Besides Figma design and backend
          testing files, we had to create everything else on our own. This
          includes all the coding components, as well as the project management
          component. Creating a realistic timeline for all of our different
          functions, and communicating with backend engineers on API specs, were
          all a lot more difficult than I had imagined. Working with another
          frontend engineer was a challenge too. We spent a lot of time figuring
          out what we need to communicate with each other. This includes class
          naming convention, what stacks and tools to use, Sass structure,
          components structure, who to work on what, etc. All in all, it was a
          painful but very rewarding process that better prepares me for the
          real work environment.
          <br /><br />
          For technical challenges, the first issue I encountered was routing.
          Since we are doing a user’s page as well as an admin portal, we needed
          to make sure the user cannot access the admin portal. My solution is
          to use a combination of Vuex and localStorage to identify admins and
          users and use it to prevent user access to the admin portal. Another
          challenge is the “Remove profile picture” function. Uploading pictures
          and switching pictures are easy-to-do functions that were completed
          without issues, but I struggled to complete the remove photo function.
          The biggest blocker is figuring out how to upload the no-image state
          to the server. The solution to this is to send an identifier to the
          server when the picture is removed, then the user’s profile image will
          be removed server-side. The solution is very simple but did not occur
          to me as I had limited backend knowledge then. It was an important
          lesson to communicate with others to reach a faster resolution.
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


