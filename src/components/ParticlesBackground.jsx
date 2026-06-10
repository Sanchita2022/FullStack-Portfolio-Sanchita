import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#020617",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#fd9202",
          },

          links: {
            color: "#fd9202",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 60,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },
        },
      }}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
