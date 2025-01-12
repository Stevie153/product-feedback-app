/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: '#A1FEA',
      blue: '#4661E6',
      midnight: '#4661E6',
      white: '#FFFFFF',
      gray: '#F2F4FF',
      lightGray: '#F7F8FD',
      midnightBlue: '#3A4374',
      darkGray: '#647196',
      brown:'#F49F85',
      lightBlue: '#62BCFA',

    },
   fontSize:{
    xs:['13px',{lineHeight:'19px'}],
    sm:['15px',{lineHeight:'22px'}],
    md:['16px',{lineHeight:'23px'}],
    base:['14px',{lineHeight:'20px',letterSpacing:'-0.2em'}],
    lg:['18px',{lineHeight:'26px', letterSpacing:'-0.25em'}],
    xl:['20px',{lineHeight:'29px', letterSpacing:'-0.25em'}],
    '2xl':['24px',{lineHeight:'35px', letterSpacing:'`-0.33em'}],

   },
   fontFamily:{
     jost: ['Jost', 'serif'],
   },
   fontWeight: {
    regular: '400', // Regular weight
    semibold: '600', // Semibold weight
    bold: '700', // Bold weight
  },
    extend: {},
  },
  plugins: [],
}

