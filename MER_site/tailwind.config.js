const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    mode: 'layers',
    content: []
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      height: {
        '270px': '270px',
        '450px': '450px',
        '40': '10rem',
        'screen-40': '40vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      maxHeight: {
        '9/10': '90%',
       },

      width: {
        '20': '8rem',
        'screen-95': '95vw',
      },

      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '480px': '480px',
        '800px': '800px',
       },

      padding:{
        '1/2': '56.25%',
        '1/3': '33,33%',
      },
      backgroundImage: theme => ({
        'hero-about': "url('../assets/images/jpg/note_brain-music.jpg')",
        'team-rick': "url('../assets/images/jpg/team/rick.jpg')",
        'further-research': "url('../assets/images/jpg/note_brain-music.jpg')",
        'running': "url('../assets/images/png/running.png')",
      }),

      colors: {
        'bg-black': {
          DEFAULT: '#242424',
          '50': '#979797',
          '100': '#8A8A8A',
          '200': '#717171',
          '300': '#575757',
          '400': '#3E3E3E',
          '500': '#242424',
          '600': '#0A0A0A',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'orange-action': {
          DEFAULT: '#D38936',
          '50': '#FCF8F2',
          '100': '#F8EBDD',
          '200': '#EED3B4',
          '300': '#E5BA8A',
          '400': '#DCA260',
          '500': '#D38936',
          '600': '#B06F26',
          '700': '#86541D',
          '800': '#5C3A14',
          '900': '#32200B'
        },
        'bg-blue': {
          DEFAULT: '#004B82',
          '50': '#68BFFF',
          '100': '#4FB5FF',
          '200': '#1C9FFF',
          '300': '#0086E8',
          '400': '#195d8e',
          '500': '#004B82',
          '600': '#002E4F',
          '700': '#00101C',
          '800': '#000000',
          '900': '#000000'
        },
        'line-grey': {
          DEFAULT: '#707070',
          '50': '#E3E3E3',
          '100': '#D6D6D6',
          '200': '#BDBDBD',
          '300': '#A3A3A3',
          '400': '#8A8A8A',
          '500': '#707070',
          '600': '#575757',
          '700': '#3D3D3D',
          '800': '#242424',
          '900': '#0A0A0A'
        },
        'research-white': {
          DEFAULT: '#EEEEEE',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#EEEEEE',
          '600': '#D4D4D4',
          '700': '#BBBBBB',
          '800': '#A2A2A2',
          '900': '#888888'
        },
        'sonification-green': {
          DEFAULT: '#00FF6F',
          '50': '#E5FFF1',
          '100': '#CCFFE2',
          '200': '#99FFC5',
          '300': '#66FFA9',
          '400': '#33FF8C',
          '500': '#00FF6F',
          '600': '#00CC59',
          '700': '#009943',
          '800': '#00662C',
          '900': '#003316'
        },
        'music-red': {
          DEFAULT: '#FF2727',
          '50': '#FFFFFF',
          '100': '#FFF3F3',
          '200': '#FFC0C0',
          '300': '#FF8D8D',
          '400': '#FF5A5A',
          '500': '#FF2727',
          '600': '#F30000',
          '700': '#C00000',
          '800': '#8D0000',
          '900': '#5A0000'
        },
        'ai-blue': {
          DEFAULT: '#79E5F2',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#D6F7FB',
          '400': '#A7EEF7',
          '500': '#79E5F2',
          '600': '#4BDCED',
          '700': '#1CD3E9',
          '800': '#13ADBF',
          '900': '#0E8391'
        },
      },

      animation: {
        heroAnimation: 'heroAnimation 5s linear infinite',
      }
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'hover', 'before', 'after'],
      position: ['responsive', 'hover', 'before',
        'after',
      ],
      inset: ['responsive', 'hover', 'before',
        'after',
      ],
      width: ['responsive', 'hover', 'before',
        'after',
      ],
      margin: ['responsive', 'hover', 'before',
        'after',
      ],
      backgroundColor: ['responsive', 'hover', 'before',
        'after',
      ],
      borderStyle: ['responsive', 'hover', 'before',
        'after',
      ],
      fontFamily: ['responsive', 'hover', 'before',
        'after',
      ],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
        ".border-dashed": {
          borderStyle: "border-dashed",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
}