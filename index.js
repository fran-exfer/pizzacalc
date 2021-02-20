'use strict';

/*
 * PizzaCalc
 *
 * by Fran Expósito Fernández
 */

// Element reference
const inputFlour = document.getElementById('input-flour');
const inputHidration = document.getElementById('input-hidration');

const resFlour = document.getElementById('res-flour');
const resWater = document.getElementById('res-water');
const resSalt = document.getElementById('res-salt');
const resOil = document.getElementById('res-oil');
const resFreshYeast = document.getElementById('res-fresh-yeast');
const resInstantYeast = document.getElementById('res-instant-yeast');
const resTotal = document.getElementById('res-total');

// Función para actualizar los datos de los resultados...
const actualizaResultados = function () {
  const flour = Number(inputFlour.value);
  const hidration = Number(inputHidration.value);
  const water = (flour * hidration) / 100;
  const salt = (flour * 2) / 100;
  const oil = (flour * 2) / 100;
  const levaduraFresca = (flour * 2) / 100;
  const levaduraSeca = levaduraFresca / 3;
  const total = flour + water + salt + levaduraFresca;

  if (flour > 0 && hidration > 0) {
    resFlour.textContent = `${flour}gr`;
    resWater.textContent = `${Number.parseFloat(
      water.toFixed(2)
    ).toLocaleString('es-ES')}gr`;
    resSalt.textContent = `${Number.parseFloat(salt.toFixed(2)).toLocaleString(
      'es-ES'
    )}gr`;
    resOil.textContent = `${Number.parseFloat(oil.toFixed(2)).toLocaleString(
      'es-ES'
    )}gr`;
    resFreshYeast.textContent = `${Number.parseFloat(
      levaduraFresca.toFixed(2)
    ).toLocaleString('es-ES')}gr`;
    resInstantYeast.textContent = `${Number.parseFloat(
      levaduraSeca.toFixed(2)
    ).toLocaleString('es-ES')}gr`;
    resTotal.textContent = `${Number.parseFloat(
      total.toFixed(2)
    ).toLocaleString('es-ES')}gr`;
  }
};

// Asignar listeners
inputFlour.addEventListener('keyup', function () {
  this.value = this.value.replace(/[^0-9]/g, '');
  actualizaResultados();
});

inputHidration.addEventListener('keyup', function () {
  this.value = this.value.replace(/[^0-9]/g, '');
  actualizaResultados();
});
