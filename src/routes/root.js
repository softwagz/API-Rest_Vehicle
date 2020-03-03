const router = require('express').Router();
const _ = require('underscore');
const mongoDb = require('../DDBB/mongoDB.json');

//Rutas para las peticiones de la App;

// login(usuario, password);
router.post('/app/login', (req, res) => {
    
    var {usuario,clave} = req.body;
    var respuesta = login(usuario, clave);
    res.json(respuesta)

});

// estadoAsignacionUsuario(usuario);
router.post('/app/estadoAsignacion', (req, res) => {
    

    
    var {usuario} = req.body;
    var resultado = estadoAsignacionUsuario(usuario)
    res.json(resultado);
});

// getPatentesDisponibles(fecha);
router.post('/app/patentesDisponibles', (req, res) => {
    
    var {fecha} = req.body;
    var resultado = getPatentesDisponibles(fecha);
    res.json(resultado);
});

// getVehiculo(patente);
router.post('/app/obtenerVehiculos', (req, res) => {
    
    var {patente} = req.body;
    var resultado = getVehiculo(patente);
    res.json(resultado);
});

//getCriteriosdeInspeccion();
router.get('/app/criteriosInspeccion', (req, res) => {
    var resultado = getCriteriosdeInspeccion();
    res.json(resultado);
});

//guardarInspeccion(patente, Inspeccion, rut);
router.post('/app/guardarInspeccion', (req, res) => {
    var {patente,inspeccion,rut} = req.body;
    var resultado = guardarInspeccion(patente, inspeccion, rut);
    res.json(resultado);
});

//finalizarAsignacion(patente, rut, cierre);
router.post('/app/finalizarAsignacion', (req, res) => {
    var {patente,rut,cierre} = req.body;
    var resultado = finalizarAsignacion(patente, rut, cierre);
    res.json(resultado);
});

//cambiarContraseña(usuario,clave);
router.post('/app/cambiarClave', (req, res) => {
    
    var {usuario,clave} = req.body;
    var resultado = cambiarContraseña(usuario, clave);
    res.json(resultado);
});

//Rutas para las peticiones de la Web

//Pantalla 1: Login********************
//login(usuario, contraseña);
router.post('/web/login', (req, res) => {
    
    var {usuario, clave} = req.body;
    var resultado = loginAdm(usuario, clave);
    res.json(resultado);
});

//Pantalla 2: Bienvenida***************

//getVehiculosAsignados();
router.get('/web/vehiculosAsignados', (req, res) => {
    resultado = getVehiculosAsignados();
    res.json(resultado);
});

//getVehiculosDisponibles(fecha);
router.post('/web/vehiculosDisponible', (req, res) => {
    
    var {fecha} = req.body;
    resultado = getVehiculosDisponibles(fecha);
    res.json(resultado);
});


//Pantalla 3: Usuario*********************

//modificarUsuario(rut…);
router.put('/web/modificarUsuario', (req, res) => {
    var { rut } = req.body;
    var data = {...req.body}
    console.log(data)
    resultado = modificarUsuario(rut, data);
    res.json(resultado);

});


//agregarUsuario(rut…);
router.post('/web/agregarUsuario', (req, res) => {
    var data = req.body;
    var resultado = agregarUsuario(data);
    res.json(resultado);

});


//borrarUsuario(rut…);
router.put('/web/borrarUsuario', (req, res) => {
    var { rut } = req.body;
    resultado = borrarUsuario(rut);
    res.json(resultado);
});


//buscarUsuario(rut);
router.post('/web/buscarUsuario', (req, res) => {
    var { rut } = req.body;
    console.log(req.body);
    resultado = buscarUsuario(rut);
    res.json(resultado);
});


//listarUsuario();
router.get('/web/listarUsuarios', (req, res) => {
    var resultado = listarUsuarios();
    console.log(resultado);
    res.json(resultado);
});


//Pantalla 4: Vehículos********************

//listarVehiculo();
router.get('/web/listarvehiculos', (req, res) => {
    var resultado = listarVehiculo();
    res.json(resultado);
});

//agregarVehiculo(patente….);
router.post('/web/agregarVehiculo', (req, res) => {
    var data = req.body;
    resultado = agregarVehiculo(data);
    res.json(resultado);
});

//modificarVehiculo(patente…);
router.put('/web/modificarVehiculo', (req, res) => {
    var {patente, data} = req.body;
       resultado = modificarVehiculo(patente, data);
          res.json(resultado);
	  });

//borrarVehiculo(patente…);
router.put('/web/borrarVehiculo', (req, res) => {
    
    var { patente} = req.body;
    resultado = borrarVehiculo(patente);
    res.json(resultado);
});

//buscarVehiculo(patente);
router.post('/web/buscarVehiculo', (req, res) => {
    
    var {patente} = req.body;
    resultado = buscarVehiculo(patente);
    res.json(resultado);
});

//listarTipoVehiculo();
router.get('/web/listarTipoVehiculo', (req, res) => {
    var resultado = listarTipoVehiculo();
    res.json(resultado);
});

//Pantalla 5: Tipo Vehículo**********************

//borrarTipoVehiculo(id_tipoVehiculo);
router.put('/web/borrarTipoVehiculo', (req, res) => {
    
    var {codigo} = req.body;
    resultado = borrarTipoVehiculo(codigo);
    res.json(resultado);
});

//agregarTipoVehiculo(id_tipoVehiculo…);
router.post('/web/agregarTipoVehiculo', (req, res) => {
    
    var {parametro} = req.body;
    resultado = agregarTipoVehiculo(parametro);
    res.json(resultado);
});

//modificarTipoVehiculo(id_tipoVehiculo…);
router.put('/web/modificarTipoVehiculo', (req, res) => {
    
    var {parametro} = req.body;
    resultado = modificarTipoVehiculo(parametro);
    res.json(resultado);
});

//buscarTipoVehiculo(id_tipoVehiculo);
router.post('/web/buscarTipoVehiculo', (req, res) => {
    
    var {parametro} = req.body;
    resultado = buscarTipoVehiculo(parametro);
    res.json(resultado);
});

//Pantalla 6: Asignación*************************

//listarVehiculosDisponibles(fecha1, fecha2);
router.post('/web/listarVehiculo', (req, res) => {
    
    var {fecha1,fecha2} = req.body;
    resultado = listarVehiculosDisponibles(fecha1, fecha2);
    res.json(resultado);
});

//listarUsuariosDisponibles(fecha1, fecha2);
router.post('/web/listarUsuariosDisponibles', (req, res) => {
    var {
        fecha1,
        fecha2
    } = req.body;
    resultado = listarUsuariosDisponibles(fecha1, fecha2);
    res.json(resultado);
});

//asignarVehiculo(patente, rut);
router.post('/web/asignarVehiculo', (req, res) => {
    var {
        patente,
        rut
    } = req.body;
    resultado = asignarVehiculo(patente, rut);
    res.json(resultado);
});

//getPatentesDisponibles(fecha);
router.post('/web/patentesDisponibles', (req, res) => {
    var {
        fecha
    } = req.body;
    resultado = getPatentesDisponibles(fecha);
    res.json(resultado);
})


//Pantalla 7: **********************************

//getBitacoraVehiculo(patente);
router.post('/web/bitacoraVehiculo', (req, res) => {
    var {
        patente
    } = req.body;
    resultado = getBitacoraVehiculo(patente);
    res.json(resultado);
});

//verDetalleInspeccion(id_bitacora);
router.post('/web/detalleInspeccion', (req, res) => {
    var {
        codigo
    } = req.body;
    resultado = verDetalleInspeccion(codigo);
    res.json(resultado);
});

//listarCategorias;
router.get('/web/listarCategorias', (req, res) => {
    var {} = req.body;
    resultado = listarCategorias();
    res.json(resultado);
});






//funciones Compartidas

function listarCategorias() {
    var resultado = [];
    mongoDb[0]['criterios'].forEach(categoria => {
        resultado.push(categoria.nombre);
    });
    return resultado;
}


function getPatentesDisponibles(fecha) {
    var listaPatentesDisponibles = [];
    mongoDb[0]['bitacoras'].forEach(element => {
        if (element['asignado'] == false || element['fechafinal'] < fecha) {
            listaPatentesDisponibles.push(element['patenteVehiculo']);
        }
    });
    if (listaPatentesDisponibles.length > 0) {
        return listaPatentesDisponibles;
    } else {
        return -1
    }

}



//Funciones de la App

function login(usuario, clave) {
    var resultado;
    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['usuario'] == usuario && conductor['clave'] == clave) {
            resultado = conductor;
        } else {
            resultado = -1;
        }
    });
    return resultado;
}

function estadoAsignacionUsuario(usuario) {
    var resultado = -1;
    var conductor;

    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['usuario'] == usuario) {
            resultado = conductor['estadoAsignacion'];
            conductor = conductor;
        }
    });

    if (resultado) {
        if (estadoInspeccionVehiculo(conductor['patenteAsignada'])) {
            return {
                estadoAsignacion: true,
                estadoInspeccion: true
            }
        } else {
            return {
                estadoAsignacion: true,
                estadoInspeccion: false
            }
        }
    }

    return {
        estadoAsignacion: false,
        estadoInspeccion: false
    }
}
// funcion auxiliar de estadoAsignacionUsuario********************************************************
// Si Maxi asigna un vehiculo pero el conductor no ha realizado inspeccion

function estadoInspeccionVehiculo(patente) {
    var resultado = -1;
    mongoDb[0]['bitacoras'].forEach(bitacoraVehiculo => {
        if (bitacoraVehiculo['patenteVehiculo'] == patente) {
            resultado = bitacoraVehiculo['inspeccion'];
        }
    });
    return resultado;
}

function getVehiculo(patente) {
    var resultado = -1;
    mongoDb[0]['vehiculos'].forEach(element => {
        if (element['patente'] == patente) {
            resultado = element;
        };
    });
    return resultado;
}

function getCriteriosdeInspeccion() {
    return mongoDb[0]['criterios'];
}
//**************************************************************************************************** */
function guardarInspeccion(patente, criteriosInspeccion, rut) {

    // el parametro criteriosInspeccion recibe todos los criterios de Inspeccion debidamente llenados
    // ¿maybe pasar la fecha del registro en la bitacora para asociar el registro con la inspeccion?

    var fechaRegistro; //esta es la fecha en que el usuario se asigno el vehiculo y por tanto tiene un registro en la bitacora

    mongoDb[0]['bitacoras'].forEach(bitacoraVehiculo => {
        if (bitacoraVehiculo['patenteVehiculo'] == patente) {
            bitacoraVehiculo['inspeccion'] = true;
            var listaRegistro = bitacoraVehiculo['registro'];
            // ordeno los registro de mayor a menor por fecha y obtengo el primero, que seria el ultimo que se registro
            // y este registro lo asocio a la inspeccion que estoy guardando
            listaRegistro.sort((a, b) => {
                if (Date.parse(a.fechaRegistro) > Date.parse(b.fechaRegistro)) {
                    return -1;
                }
            });

            fechaRegistro = listaRegistro[0]['fechaRegistro'];

        }
    })

    var data = {
        "patenteVehiculo": patente,
        "rutConductor": rut,
        "fechaRegistro": fechaRegistro,
        "criterios": [criteriosInspeccion],
        "status": true
    }

    mongoDb[0]['inspecciones'].push(data);

    return mongoDb[0]['inspecciones'];

}

//****************************************************************************************************** */
// cierre es la fecha, debo establecer un formato de fecha para todos, tanto para la app como para la web
// para generalizar ese dato y puedan compartirlo

function finalizarAsignacion(patente, rut, cierre) {
    var resultado = -1;
    var date = cierre;
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var fecha = yyyy + '-' + mm + '-' + dd;

    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['rut'] == rut) {
            mongoDb[0]['bitacoras'].forEach(bitacora => {
                if (bitacora['patenteVehiculo'] == patente) {
                    conductor['estadoAsignacion'] = false;
                    bitacora['asignado'] = false;
                    bitacora['conductor'] = '';
                    bitacora['fechaFinal'] = fecha;
                    resultado = bitacora;
                }
            });
        }
    });
    return resultado;
}

function cambiarContraseña(usuario, clave) {
    var resultado = -1;
    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['usuario'] == usuario) {
            conductor['clave'] = clave;
            resultado = 'Operacion Exitosa';
        }
    });
    return resultado;
}



//funciones de la Web

function loginAdm(usuario, clave) {
    var resultado = -1;
    mongoDb[0]['loginAdmin'].forEach(admin => {
        if (admin['usuario'] == usuario) {
            if (admin['clave'] == clave) {
                resultado = admin;
            }
        }
    });
    return resultado;
};

//init 
function getVehiculosAsignados() {
    var vehiculosAssig = [];
    mongoDb[0]['bitacoras'].forEach(bitacoraVehiculo => {
        if (bitacoraVehiculo['asignado']) {
            mongoDb[0]['vehiculos'].forEach(vehiculo => {
                if (vehiculo['patente'] == bitacoraVehiculo['patenteVehiculo']) {
                    vehiculosAssig.push(vehiculo);
                }
            });
        }
    });
    if (vehiculosAssig.length > 0) {
        return vehiculosAssig;
    } else {
        return -1;
    }
}

function getVehiculosDisponibles(fecha) {

    var disponible = [];
    mongoDb[0]['bitacoras'].forEach(bitacoraVehiculo => {
        if (bitacoraVehiculo['asignado'] == false || bitacoraVehiculo['fechaFinal'] < fecha) {
            mongoDb[0]['vehiculos'].forEach(vehiculo => {
                if (vehiculo['patene'] == bitacoraVehiculo['patenteVehiculo']) {
                    disponible.push(vehiculo);
                }

            });
        }
    });

    if (disponible.length > 0) {
        return disponible;
    } else {
        return -1;
    }
}

//Usuarios

function modificarUsuario(rut, data) {
    var resultado = -1;
    var { nombre, apellido, usuario, clave} = data;
    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['rut'] == rut) {
            conductor['nombre'] = nombre;
            conductor['apellido'] = apellido;
            conductor['usuario'] = usuario;
            conductor['clave'] = clave;
            resultado = conductor;
        }
    });
    return resultado;
}

function agregarUsuario(data) {
    var { rut , nombre, apellido , usuario , clave } = data;
    if (!rutRepetido(rut)) {
        var id = (mongoDb[0]['conductores'].length + 1).toString();
        var status = true;
        var estadoAsignacion = false;
        var patenteAsignada = '';
        var nuevoUsuario = { 
            rut:rut,
            nombre:nombre,
            apellido,apellido,
            usuario:usuario,
            clave:clave,
            patenteAsignada:patenteAsignada,
            estadoAsignacion:estadoAsignacion,
            status:status,
            id:id
         }
        mongoDb[0]['conductores'].push(nuevoUsuario);
        return nuevoUsuario;
    } else {
        return -1
    }

}

function borrarUsuario(rut) {
    var resultado = -1;
    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['rut'] == rut) {
            conductor['status'] = false;
            resultado = conductor;
        }
    });

    return resultado;
}

function buscarUsuario(rut) {
    var resultado = -1;
    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['rut'] == rut) {
            resultado = conductor;
        }
    });
    return resultado;
}

function listarUsuarios() {
    return mongoDb[0]['conductores'];
}

//vehiculos

function listarVehiculo() {
    return mongo[0]['vehiculos'];
}

function agregarVehiculo(data) {
    var {
        patente
    } = data;
    if (!patenteRepetida(patente)) {
        var id = ++mongoDb[0]['vehiculos'].length.toString();
        var status = true;
        var nuevoVehiculo = {
            ...data,
            id,
            status
        }
        mongoDb[0]['vehiculos'].push(nuevoVehiculo);
        return nuevoVehiculo;
    } else {
        return -1
    }

}

function modificarVehiculo(patente, data) {
    var resultado = -1
    var {
        marca,
        modelo,
        anno,
        tipo
    } = data;
    mongoDb[0]['vehiculos'].forEach(vehiculo => {
        if (vehiculo['patente'] == patente) {
            vehiculo['marca'] = marca;
            vehiculo['modelo'] = modelo;
            vehiculo['anno'] = anno;
            vehiculo['tipo'] = tipo;
            resultado = vehiculo;
        }
    });
    return resultado;
}

function borrarVehiculo(patente) {
    var resultado = -1;
    mongoDb[0]['vehiculos'].forEach(vehiculo => {
        if (vehiculo['patente'] == patente) {
            vehiculo['status'] = false;
            resultado = vehiculo;
        }
    });
    return resultado;
}

function buscarVehiculo(patente) {
    var resultado = -1;
    mongoDb[0]['vehiculos'].forEach(vehiculo => {
        if (vehiculo['patente'] == patente) {
            resultado = vehiculo;
        }
    });
    return resultado;
}

function listarTipoVehiculo() {
    return mongoDb[0]['tipoVehiculos'];
}

//tipoVehiculo

function borrarTipoVehiculo(codigo) {
    var resultado = -1;

    mongoDb[0]['tipoVehiculos'].forEach(element => {
        if (element['codigo'] == codigo) {
            element['status'] = false;
            resultado = element;
        }
    });
    return resultado;
}

function agregarTipoVehiculo(data) {

    var {
        codigo
    } = data;
    if (!codigoRepetido(codigo)) {
        var id = ++mongoDb[0]['tipoVehiculos'].length.toString();
        var nuevoTipo = {
            ...data,
            id
        };
        mongoDb[0]['tipoVehiculos'].push(nuevoTipo);
        return mongoDb[0]['tipoVehiculos'];
    }

}

function modificarTipoVehiculo(data) {
    var resultado = -1;
    var {
        codigo,
        nombre
    } = data;
    mongoDb[0]['tipoVehiculos'].forEach(element => {
        if (element['codigo'] == codigo) {
            element['nombre'] = nombre;
            resultado = element;
        }
    });
    return resultado;
}

function buscarTipoVehiculo(codigo) {
    var resultado = -1;
    mongoDb[0]['tipoVehiculos'].forEach(element => {
        if (element['codigo'] == codigo) {
            resultado = element;
        }
    });
    return resultado;
}

//asignacion

function listarVehiculosDisponibles(fecha1, fecha2) {
    var resultado = [];
    mongoDb[0]['bitacoras'].forEach(bitacoraVehiculo => {

        if (bitacoraVehiculo['fechaFinal'] > fecha1 && bitacoraVehiculo['fechaFinal'] < fecha2) {
            mongoDb[0]['vehiculos'].forEach(vehiculo => {
                if (vehiculo['patente'] == bitacoraVehiculo['patenteVehiculo']) {
                    resultado.push(vehiculo);
                }
            });
        }
    });
    if (resultado.length > 0) {
        return resultado;
    } else {
        return -1
    }
}

function listarUsuariosDisponibles(fecha1, fecha2) {
    var resultado = [];
    mongoDb[0]['conductores'].forEach(conductor => {
        if (!conductor['estadoAsignacion']) {
            //agrega los conductores que estas directamente disponible desde este momento
            //condicion (si estan disponible entonces pueden estar disponible hasta esa fecha tambien)
            resultado.push(conductor);
        } else {
            //agrega los que estaran disponible entre esas fechas
            mongoDb[0]['bitacoras'].forEach(bitacoraVehiculo => {
                if (bitacoraVehiculo['finalizacionAsignacion'] >= fecha1 && vehiculo['finalizacionAsignacion'] <= fecha2) {
                    mongoDb[0]['conductores'].forEach(conductor => {
                        if (conductor['rut'] == bitacoraVehiculo['conductor']) {
                            resultado.push(conductor);
                        }
                    });
                }
            });
        }
    })

    if (resultado.length > 0) {
        return resultado;
    } else {
        return -1
    }

}
//********************************************************************************************************** */
// Dudas que preguntar...
// Aca para esta funcion deberia existir la fecha de Inicio y Final;
// La funcion finalizar asignacion deberia existir para terminar la asignacion antes o el 
// mismo dia que esta registrado como "hasta".
// deberia haber una funcion en app que se llame asignar


function asignarVehiculo(patente, rut) {

    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['rut'] == rut) {
            conductor['patenteAsignada'] = patente;
            conductor['estadoAsignacion'] = true;
        }
    });

    var fecha; //fecha en el momento que el conductor se asigna la patente,esta fecha esta fuera para usarla en el registro de inspeccion
    // y asociarla a este registro.
    var fechaDesde; //fecha en el momento que el conductor se asigne la patente.
    var fechaHasta; //fecha Final ya sea que venga porque finalizaron antes. hay que editarla en ese caso

    var registro = {
        rutConductor: patente,
        fechaRegistro: fecha,
        fechaAsignacion: {
            desde: fechaDesde,
            hasta: fechaHasta
        }
    }

    mongoDb[0]['bitacoras'].forEach(bitacoraVehiculo => {
        if (bitacoraVehiculo['patenteVehiculo'] == patente) {
            bitacoraVehiculo['asignado'] = true;
            bitacoraVehiculo['conductor'] = rut;
            bitacoraVehiculo['inspeccion'] = false;
            bitacoraVehiculo['registro'].push(registro);
        }
    });
}

//bitacora

function getBitacoraVehiculo(patente) {
    var bitacoraVehiculo = [];
    mongoDb[0]['bitacoras'].forEach(bitacora => {
        if (bitacora['patenteVehiculo'] == patente) {
            bitacoraVehiculo.push(element);
        }
    });

    if (historialVehiculo.length > 0) {
        return historialVehiculo;
    } else {
        return -1;
    }
}

function verDetalleInspeccion(id_bitacora) {

    //¿ parametro id_bitacora ?
}

//funciones auxiliar
function rutRepetido(rut) {
    var result = false;
    mongoDb[0]['conductores'].forEach(conductor => {
        if (conductor['rut'] == rut) {
            result =  true
        }
    });

    return result;
}

function patenteRepetida(patente) {
    var result = false;
    mongoDb[0]['vehiculos'].forEach(vehiculo => {
        if (vehiculo['patente'] == patente) {
            result = true
        }
    });

    return result;
}

function codigoRepetido(codigo) {
    var result = false;
    mongoDb[0]['tipoVehiculos'].forEach(element => {
        if (element['codigo'] == codigo) {
            result =  true;
        }
    });
    return result;
}

module.exports = router;