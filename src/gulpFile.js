const {src,  dest , watch , series} = require('gulp')
const scss = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('*.scss')
            .pipe(scss())
            .pipe(dest('css')) 
}

function watchTask(){
    watch('*.scss' , buildStyles);
   
}

exports.default = series(buildStyles , watchTask);