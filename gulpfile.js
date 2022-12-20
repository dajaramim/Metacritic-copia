const { src, dest, watch } = require('gulp') //importar gulp

const sass = require('gulp-sass')(require('sass'));

function css(done) {
    src('src/scss/app.scss')
    .pipe( sass({outputStyle: 'expanded'}) )
    .pipe( dest('build/css'))

    done();
}

function dev() { //la función no se puede llamar watch, no pueden haber dos funciones llamadas igual.
    watch('src/scss/**/*.scss', css)
}

exports.css = css;

exports.dev = dev;
