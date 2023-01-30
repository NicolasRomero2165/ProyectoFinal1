/* Botón de trabajo */
document.getElementById('puestonuevo').addEventListener('click', function(){
    document.getElementById('otrotrabajo1').style.display = 'block';
    document.getElementById('puestonuevo').style.display = 'none';
    document.getElementById('puestonuevo1').style.display = 'block';
    document.getElementById('puestoquitar').style.display = 'block';
    document.getElementById('trabajook2').style.display = 'block';
    document.getElementById('puestook2').style.display = 'block';
    document.getElementById('tareasok20').style.display = 'block';
    document.getElementById('trabajonuevo1').style.display = 'block';
});
document.getElementById('puestonuevo1').addEventListener('click', function(){
    document.getElementById('otrotrabajo2').style.display = 'block';
    document.getElementById('puestoquitar').style.display = 'none';
    document.getElementById('puestoquitar1').style.display = 'block';
    document.getElementById('trabajook3').style.display = 'block';
    document.getElementById('puestook3').style.display = 'block';
    document.getElementById('tareasok30').style.display = 'block';
    document.getElementById('trabajonuevo2').style.display = 'block';
});
document.getElementById('puestoquitar').addEventListener('click', function(){
    document.getElementById('otrotrabajo1').style.display = 'none';
    document.getElementById('puestonuevo').style.display = 'block';
    document.getElementById('puestonuevo1').style.display = 'none';
    document.getElementById('puestoquitar').style.display = 'none';
    document.getElementById('trabajook2').style.display = 'none';
    document.getElementById('puestook2').style.display = 'none';
    document.getElementById('tareasok20').style.display = 'none';
    document.getElementById('trabajonuevo1').style.display = 'none';
});
document.getElementById('puestoquitar1').addEventListener('click', function(){
    document.getElementById('otrotrabajo2').style.display = 'none';
    document.getElementById('puestoquitar').style.display = 'block';
    document.getElementById('puestoquitar1').style.display = 'none';
    document.getElementById('trabajook3').style.display = 'none';
    document.getElementById('puestook3').style.display = 'none';
    document.getElementById('tareasok30').style.display = 'none';
    document.getElementById('trabajonuevo2').style.display = 'none';
});
/* Botón de curso */
document.getElementById('cursonuevo').addEventListener('click', function(){
    document.getElementById('otroestudio10').style.display = 'block';
    document.getElementById('otroestudio11').style.display = 'block';
    document.getElementById('otroestudio12').style.display = 'block';
    document.getElementById('cursonuevo').style.display = 'none';
    document.getElementById('cursonuevo1').style.display = 'block';
    document.getElementById('cursoquitar').style.display = 'block';
    document.getElementById('lugarok2').style.display = 'block';
    document.getElementById('titulook2').style.display = 'block';
});
document.getElementById('cursonuevo1').addEventListener('click', function(){
    document.getElementById('otroestudio20').style.display = 'block';
    document.getElementById('otroestudio21').style.display = 'block';
    document.getElementById('otroestudio22').style.display = 'block';
    document.getElementById('cursoquitar').style.display = 'none';
    document.getElementById('cursoquitar1').style.display = 'block';
    document.getElementById('lugarok3').style.display = 'block';
    document.getElementById('titulook3').style.display = 'block';
});
document.getElementById('cursoquitar').addEventListener('click', function(){
    document.getElementById('otroestudio10').style.display = 'none';
    document.getElementById('otroestudio11').style.display = 'none';
    document.getElementById('otroestudio12').style.display = 'none';
    document.getElementById('cursonuevo').style.display = 'block';
    document.getElementById('cursonuevo1').style.display = 'none';
    document.getElementById('cursoquitar').style.display = 'none';
    document.getElementById('lugarok2').style.display = 'none';
    document.getElementById('titulook2').style.display = 'none';
});
document.getElementById('cursoquitar1').addEventListener('click', function(){
    document.getElementById('otroestudio20').style.display = 'none';
    document.getElementById('otroestudio21').style.display = 'none';
    document.getElementById('otroestudio22').style.display = 'none';
    document.getElementById('cursoquitar').style.display = 'block';
    document.getElementById('cursoquitar1').style.display = 'none';
    document.getElementById('lugarok3').style.display = 'none';
    document.getElementById('titulook3').style.display = 'none';
});
/* Botón de sin experiencia */
document.getElementById('sinexp').addEventListener('change', function(){
    if (this.checked){document.getElementById('sinexp1').style.display = 'none';
    document.getElementById('sinexpcv').style.display = 'none';
    document.getElementById('sinexp1').style.display = 'none';
    }
    else {
    document.getElementById('sinexpcv').style.display = 'block';
    document.getElementById('sinexp1').style.display = 'block';
    }
});
/* Botón de conocimiento */
document.getElementById('conocimientonuevo1').addEventListener('click', function(){
    document.getElementById('conocimientocv2').style.display = 'block';
    document.getElementById('conocimientonuevo1').style.display = 'none';
    document.getElementById('conocimientonuevo2').style.display = 'block';
    document.getElementById('conocimientoquitar1').style.display = 'block';
    document.getElementById('conocimientook2').style.display = 'block';
})
document.getElementById('conocimientonuevo2').addEventListener('click', function(){
    document.getElementById('conocimientocv3').style.display = 'block';
    document.getElementById('conocimientonuevo2').style.display = 'none';
    document.getElementById('conocimientoquitar1').style.display = 'none';
    document.getElementById('conocimientonuevo3').style.display = 'block';
    document.getElementById('conocimientoquitar2').style.display = 'block';
    document.getElementById('conocimientook3').style.display = 'block';
})
document.getElementById('conocimientonuevo3').addEventListener('click', function(){
    document.getElementById('conocimientocv4').style.display = 'block';
    document.getElementById('conocimientoquitar2').style.display = 'none';
    document.getElementById('conocimientoquitar3').style.display = 'block';
    document.getElementById('conocimientook4').style.display = 'block';
})
document.getElementById('conocimientoquitar3').addEventListener('click', function(){
    document.getElementById('conocimientocv4').style.display = 'none';
    document.getElementById('conocimientoquitar3').style.display = 'none';
    document.getElementById('conocimientoquitar2').style.display = 'block';
    document.getElementById('conocimientook4').style.display = 'none';
})
document.getElementById('conocimientoquitar2').addEventListener('click', function(){
    document.getElementById('conocimientocv3').style.display = 'none';
    document.getElementById('conocimientonuevo3').style.display = 'none';
    document.getElementById('conocimientoquitar2').style.display = 'none';
    document.getElementById('conocimientonuevo2').style.display = 'block';
    document.getElementById('conocimientoquitar1').style.display = 'block';
    document.getElementById('conocimientook3').style.display = 'none';
})
document.getElementById('conocimientoquitar1').addEventListener('click', function(){
    document.getElementById('conocimientocv2').style.display = 'none';
    document.getElementById('conocimientonuevo2').style.display = 'none';
    document.getElementById('conocimientoquitar1').style.display = 'none';
    document.getElementById('conocimientonuevo1').style.display = 'block';
    document.getElementById('conocimientook2').style.display = 'none';
})
/* Botón tareas */
document.getElementById('tareanueva10').addEventListener('click', function(){
    document.getElementById('tareacv11').style.display = 'block';
    document.getElementById('tareanueva10').style.display = 'none';
    document.getElementById('tareanueva11').style.display = 'block';
    document.getElementById('tareaquitar10').style.display = 'block';
    document.getElementById('tareasok11').style.display = 'block';
})
document.getElementById('tareanueva11').addEventListener('click', function(){
    document.getElementById('tareacv12').style.display = 'block';
    document.getElementById('tareanueva11').style.display = 'none';
    document.getElementById('tareaquitar10').style.display = 'none';
    document.getElementById('tareanueva12').style.display = 'block';
    document.getElementById('tareaquitar11').style.display = 'block';
    document.getElementById('tareasok12').style.display = 'block';
})
document.getElementById('tareanueva12').addEventListener('click', function(){
    document.getElementById('tareacv13').style.display = 'block';
    document.getElementById('tareaquitar11').style.display = 'none';
    document.getElementById('tareaquitar12').style.display = 'block';
    document.getElementById('tareasok13').style.display = 'block';
})
document.getElementById('tareaquitar12').addEventListener('click', function(){
    document.getElementById('tareacv13').style.display = 'none';
    document.getElementById('tareaquitar12').style.display = 'none';
    document.getElementById('tareaquitar11').style.display = 'block';
    document.getElementById('tareasok13').style.display = 'none';
})
document.getElementById('tareaquitar11').addEventListener('click', function(){
    document.getElementById('tareacv12').style.display = 'none';
    document.getElementById('tareanueva12').style.display = 'none';
    document.getElementById('tareaquitar11').style.display = 'none';
    document.getElementById('tareanueva11').style.display = 'block';
    document.getElementById('tareaquitar10').style.display = 'block';
    document.getElementById('tareasok12').style.display = 'none';
})
document.getElementById('tareaquitar10').addEventListener('click', function(){
    document.getElementById('tareacv11').style.display = 'none';
    document.getElementById('tareanueva11').style.display = 'none';
    document.getElementById('tareaquitar10').style.display = 'none';
    document.getElementById('tareanueva10').style.display = 'block';
    document.getElementById('tareasok11').style.display = 'none';
})
document.getElementById('tareanueva20').addEventListener('click', function(){
    document.getElementById('tareacv21').style.display = 'block';
    document.getElementById('tareanueva20').style.display = 'none';
    document.getElementById('tareanueva21').style.display = 'block';
    document.getElementById('tareaquitar20').style.display = 'block';
    document.getElementById('tareasok21').style.display = 'block';
})
document.getElementById('tareanueva21').addEventListener('click', function(){
    document.getElementById('tareacv22').style.display = 'block';
    document.getElementById('tareanueva21').style.display = 'none';
    document.getElementById('tareaquitar20').style.display = 'none';
    document.getElementById('tareanueva22').style.display = 'block';
    document.getElementById('tareaquitar21').style.display = 'block';
    document.getElementById('tareasok22').style.display = 'block';
})
document.getElementById('tareanueva22').addEventListener('click', function(){
    document.getElementById('tareacv23').style.display = 'block';
    document.getElementById('tareaquitar21').style.display = 'none';
    document.getElementById('tareaquitar22').style.display = 'block';
    document.getElementById('tareasok23').style.display = 'block';
})
document.getElementById('tareaquitar22').addEventListener('click', function(){
    document.getElementById('tareacv23').style.display = 'none';
    document.getElementById('tareaquitar22').style.display = 'none';
    document.getElementById('tareaquitar21').style.display = 'block';
    document.getElementById('tareasok23').style.display = 'none';
})
document.getElementById('tareaquitar21').addEventListener('click', function(){
    document.getElementById('tareacv22').style.display = 'none';
    document.getElementById('tareanueva22').style.display = 'none';
    document.getElementById('tareaquitar21').style.display = 'none';
    document.getElementById('tareanueva21').style.display = 'block';
    document.getElementById('tareaquitar20').style.display = 'block';
    document.getElementById('tareasok22').style.display = 'none';
})
document.getElementById('tareaquitar20').addEventListener('click', function(){
    document.getElementById('tareacv21').style.display = 'none';
    document.getElementById('tareanueva21').style.display = 'none';
    document.getElementById('tareaquitar20').style.display = 'none';
    document.getElementById('tareanueva20').style.display = 'block';
    document.getElementById('tareasok21').style.display = 'none';
})
document.getElementById('tareanueva30').addEventListener('click', function(){
    document.getElementById('tareacv31').style.display = 'block';
    document.getElementById('tareanueva30').style.display = 'none';
    document.getElementById('tareanueva31').style.display = 'block';
    document.getElementById('tareaquitar30').style.display = 'block';
    document.getElementById('tareasok31').style.display = 'block';
})
document.getElementById('tareanueva31').addEventListener('click', function(){
    document.getElementById('tareacv32').style.display = 'block';
    document.getElementById('tareanueva31').style.display = 'none';
    document.getElementById('tareaquitar30').style.display = 'none';
    document.getElementById('tareanueva32').style.display = 'block';
    document.getElementById('tareaquitar31').style.display = 'block';
    document.getElementById('tareasok32').style.display = 'block';
})
document.getElementById('tareanueva32').addEventListener('click', function(){
    document.getElementById('tareacv33').style.display = 'block';
    document.getElementById('tareaquitar31').style.display = 'none';
    document.getElementById('tareaquitar32').style.display = 'block';
    document.getElementById('tareasok33').style.display = 'block';
})
document.getElementById('tareaquitar32').addEventListener('click', function(){
    document.getElementById('tareacv33').style.display = 'none';
    document.getElementById('tareaquitar32').style.display = 'none';
    document.getElementById('tareaquitar31').style.display = 'block';
    document.getElementById('tareasok33').style.display = 'none';
})
document.getElementById('tareaquitar31').addEventListener('click', function(){
    document.getElementById('tareacv32').style.display = 'none';
    document.getElementById('tareanueva32').style.display = 'none';
    document.getElementById('tareaquitar31').style.display = 'none';
    document.getElementById('tareanueva31').style.display = 'block';
    document.getElementById('tareaquitar30').style.display = 'block';
    document.getElementById('tareasok32').style.display = 'none';
})
document.getElementById('tareaquitar30').addEventListener('click', function(){
    document.getElementById('tareacv31').style.display = 'none';
    document.getElementById('tareanueva31').style.display = 'none';
    document.getElementById('tareaquitar30').style.display = 'none';
    document.getElementById('tareanueva30').style.display = 'block';
    document.getElementById('tareasok31').style.display = 'none';
})


