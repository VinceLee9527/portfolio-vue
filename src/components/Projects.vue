<style lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  .projects-container {
    padding: 20px 20px;
    .header {
      margin-top: 50px;
      .title {
        font-size: 2.2rem;
        position: relative;
        &::after {
          width: 100px;
          height: 4px;
          content: "";
          margin: auto;
          position: absolute;
          background: $main-orange;
          bottom: -2px;
          left: 40px;
        }
      }
    }
    .card-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 40px;
      .project-card {
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
        .project-content-container {
          display: flex;
          flex-direction: column;
        }
        .project-snap {
          max-width: 330px;
          &:hover img {
            -webkit-filter: grayscale(0);
            filter: grayscale(0);
          }
          img {
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
            -webkit-transition: 0.3s ease-in-out;
            transition: 0.3s ease-in-out;
            border-radius: 10px;
          }
        }

        .project-title {
          margin: 15px 0;
          h2 {
            font-size: 2.5rem;
          }
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
            font-size: 0.8rem;
            margin-right: 5px;
            margin-bottom: 5px;
          }
        }
        .project-intro {
          max-width: 350px;
          margin-bottom: 10px;
          p {
            font-size: 1.2rem;
          }
        }

        .project-button {
          margin-top: 20px;
          text-align: center;
          overflow: hidden;
          position: relative;
          border-radius: 5%;
          transition: all 0.5s;
          font-size: 1.4rem;
          padding: 20px 30px;
          color: black;
          font-weight: 700;
          width: 210px;
          &::after {
            width: 100%;
            height: 100%;
            content: "";
            margin: auto;
            position: absolute;
            background: $main-gray;
            top: 0;
            left: 0;
            z-index: -2;
          }
          &::before {
            width: 100%;
            height: 100%;
            content: "";
            margin: auto;
            position: absolute;
            top: -100%;
            left: -100%;
            background: $main-orange;
            transition: all 0.5s;
            z-index: -1;
          }
          &:hover {
            color: $white;
          }
          &:hover:before {
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
}

@media (min-width: $breakpoint-tablet) {
  .projects {
    .projects-container {
      .card-container {
        .project-card {
          margin-right: 20px;
        }
      }
    }
  }
}

@media (min-width: $breakpoint-desktop) {
  .projects {
    .projects-container {
      .card-container {
        .project-card {
          flex-direction: row;
          width: 1000px;
          justify-content: space-around;
          margin-bottom: 120px;
          .snap-container {
            width: 450px;
            position: relative;
            .project-snap {
              position: absolute;
              max-width: 100%;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          .project-content-container {
            width: 400px;
            .project-title {
              h2 {
                font-size: 2.6rem;
              }
            }
            .project-stack {
              span {
                font-size: 0.9rem;
              }
            }
            .project-intro {
              p {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>


<template>
  <div class="projects">
    <div class="projects-container">
      <div class="header">
        <h3 class="title">Projects</h3>
      </div>
      <div class="card-container">
        <div class="project-card">
          <div class="snap-container">
            <div class="project-snap">
              <router-link to="/projects/soulmate#top">
                <img src="../assets/images/soulmate.png" alt="" />
              </router-link>
            </div>
          </div>
          <div class="project-content-container">
            <div class="project-title"><h2>Soul Mate</h2></div>

            <div class="project-stack">
              <span>React</span>
              <span>MongoDB</span>
              <span>Node.js</span>
              <span>Sass</span>
              <span>Netlify</span>
            </div>
            <div class="project-intro">
              <p>
                A Tinder-like app that gives musicians looking to start a band a
                platform to find their dream band mate.
              </p>
            </div>
            <router-link
              to="/projects/soulmate#top"
              tag="button"
              class="project-button"
              >View Project</router-link
            >
          </div>
        </div>

        <div class="project-card">
          <div class="snap-container">
            <div class="project-snap">
              <router-link to="/projects/listeningParty#top">
                <img src="../assets/images/lp.png" alt="" />
              </router-link>
            </div>
          </div>
          <div class="project-content-container">
            <div class="project-title"><h2>Listening Party</h2></div>

            <div class="project-stack">
              <span>Vue 3</span>
              <span>Vuex</span>
              <span>Firebase</span>
              <span>Tailwind CSS</span>
              <span>Netlify</span>
            </div>
            <div class="project-intro">
              <p>
                An enhanced todo list that allows users to store and manage
                yet-to-listen albums.
              </p>
            </div>
            <router-link
              to="/projects/listeningParty#top"
              tag="button"
              class="project-button"
              >View Project</router-link
            >
          </div>
        </div>
        <div class="project-card">
          <div class="snap-container">
            <div class="project-snap">
              <router-link to="/projects/ACTwitter#top">
                <img src="../assets/images/act.png" alt="" />
              </router-link>
            </div>
          </div>
          <div class="project-content-container">
            <div class="project-title"><h2>AC Twitter</h2></div>

            <div class="project-stack">
              <span>Vue 2</span>
              <span>Vuex</span>
              <span>Sass</span>
              <span>Socket.IO</span>
            </div>
            <div class="project-intro">
              <p>
                A Twitter clone with full Twitter functionality such as
                followers, tweets, profiles, and admin.
              </p>
            </div>
            <router-link
              to="/projects/ACTwitter#top"
              tag="button"
              class="project-button"
              >View Project</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>