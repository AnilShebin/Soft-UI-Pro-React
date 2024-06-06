import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text HeadingOne">Soft Design System.</h1>
            <h1 className="home-text01 HeadingOne">Choose the best</h1>
            <span className="home-text02 Lead">
              <span>
                Find the story of Creative Tim&apos;s most complex design
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                system and all the work that make this design available.
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="read more"></OutlineGrayButton>
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                className="home-image"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
                className="home-image01"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
                className="home-image02"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
                className="home-image03"
              />
            </div>
          </div>
        </div>
      </div>
      <img alt="image" src="/curved6-1500h.jpg" className="home-image04" />
      <section className="home-features">
        <FeatureCard
          text="Choose the best design system for your next product."
          title="Components"
          imageSrc="/cube1.svg"
        ></FeatureCard>
        <FeatureCard imageSrc="/person1.svg"></FeatureCard>
        <FeatureCard
          text="Make your code easier to maintain using variables."
          title="Less Code"
          imageSrc="/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="This design system is fully supported on any device."
          title="Fully Responsive"
          imageSrc="/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text05 HeadingOne">
            <span className="home-text06">From nothing to something</span>
          </h1>
          <span className="home-text07">
            <span className="home-text08">
              The highest status people in human history are those that asked
              for nothing and gave everything
            </span>
          </span>
        </div>
      </section>
      <section className="home-contaier">
        <div className="home-container07">
          <div className="home-container08">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text09 HeadingTwo">
            <span className="home-text10">Beware The Components</span>
          </h2>
          <h3 className="home-text11 HeadingTwo">
            <span className="home-text12">How To Handle Them</span>
            <br></br>
          </h3>
          <span className="home-text13">
            <span className="home-text14">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className="home-container09">
          <div className="home-container10">
            <div className="home-container11"></div>
            <div className="home-container12">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon2">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text15 HeadingOne">Search and Discover!</h1>
              <span className="home-text16">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container13">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
      </section>
      <section className="home-testimonials">
        <div className="home-container14">
          <div className="home-container15">
            <div className="home-container16">
              <h2 className="home-text19 HeadingOne">Work with us</h2>
              <p className="home-text20 Lead">
                <span className="home-text21">
                  Whatever your qualification is - we got you!
                </span>
              </p>
              <p className="home-text22 Body">
                <span className="home-text23">
                  &quot;Take up one idea. Make that one idea your life - think
                  of it, dream of it, live on that idea. Let the brain, muscles,
                  nerves, every part of your body, be full of that idea, and
                  just leave every other idea alone. This is the way to success.
                  A single rose can be my garden... a single friend, my
                  world.&quot;
                </span>
              </p>
              <p className="home-text24">Mark Jojansen</p>
              <p className="home-text25 Small">Project manager, Atlassian</p>
              <div className="home-container17">
                <img
                  alt="image"
                  src="/team-4-200h.jpg"
                  className="home-image05"
                />
                <div className="home-container18"></div>
                <img
                  alt="image"
                  src="/team-3-200h.jpg"
                  className="home-image06"
                />
                <div className="home-container19"></div>
                <img
                  alt="image"
                  src="/team-2-200h.jpg"
                  className="home-image07"
                />
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container20">
              <div className="home-container21">
                <div className="home-container22">
                  <img
                    alt="image"
                    src="/logo-asana.svg"
                    className="home-image08"
                  />
                </div>
                <div className="home-container23">
                  <img
                    alt="image"
                    src="/logo-slack.svg"
                    className="home-image09"
                  />
                </div>
                <div className="home-container24">
                  <img
                    alt="image"
                    src="/logo-google-drive.svg"
                    className="home-image10"
                  />
                </div>
              </div>
              <div className="home-container25">
                <div className="home-container26">
                  <img
                    alt="image"
                    src="/logo-shopify.svg"
                    className="home-image11"
                  />
                </div>
                <div className="home-container27">
                  <img
                    alt="image"
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                    className="home-image12"
                  />
                </div>
                <div className="home-container28">
                  <img
                    alt="image"
                    src="/logo-invision.svg"
                    className="home-image13"
                  />
                </div>
              </div>
              <div className="home-container29">
                <div className="home-container30">
                  <img
                    alt="image"
                    src="/logo-attlasian.svg"
                    className="home-image14"
                  />
                </div>
                <div className="home-container31">
                  <img
                    alt="image"
                    src="/logo-weave.svg"
                    className="home-image15"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/bottom.svg" className="home-bottom-wave-image" />
        <img alt="image" src="/waves-white.svg" className="home-image16" />
        <img alt="image" src="/top.svg" className="home-top-wave-image" />
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
