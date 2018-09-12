#Moment 2

###Använda packages:###
Gulp-concat: Ihopslagning av filer.
Gulp-uglify: Används för att minifiera Javascript.
Gulp-watch: En bättre version av 'watch'.
Gulp-clean-css: Minifiering av css.
Gulp-imagemin: Minifiering av bildfiler


###Tasks:###
Default är satt att köra allting.

"movehmtl" kopierar och flyttar html filer.
"mmjs" slår ihop och minifierar Javascript.
"cssmini" slår ihop och minifierar css.
"imgmini" minifierar bilder.
"watching" watcher function som tittar efter html, css, js och bilder(allting i bildmappen).

###Mappar:###
'work' - Working folder, mappen är för arbetsfiler.
'fin' - Finished, mappen är för "färdiga" filer.
