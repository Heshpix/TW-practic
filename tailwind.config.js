/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*'],
  theme: {
    extend: {
      colors:{
        green50:'#9EFF00',
        green60:'#B1FF33',
        green70:'#C5FF66',
        green80:'#D8FF99',
        green90:'#ECFFCC',
        green95:'#F5FFE5',
        green97:'#F9FFF0',
        green99:'#FDFFFA',

        gray10:'#191919',
        gray15:'#262626',
        gray20:'#333333',
        gray30:'#4C4C4D',
        gray35:'#59595A',
        gray40:'#656567',
        gray60:'#98989A',
        gray90:'#E6E6E6',

      },
  backgroundImage:{
    p1:'url(/img/icons/h1bg.jpg);',
  },
  fontSize:{
  xl1:'21px',
  }

},
  plugins: [],
}
}
