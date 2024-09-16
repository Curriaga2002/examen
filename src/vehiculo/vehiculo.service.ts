import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculoService {
  vehiculo = []
  create(createVehiculoDto: CreateVehiculoDto) {
    this.vehiculo.push(createVehiculoDto)
    //console.log(this.clientes)
    return 'Vehiculo Creado con Exito';
  }

  findAll() {
    return this.vehiculo;
  }

  findOne(placa: string) {
    const vehiculoBuscado = this.vehiculo.find(vehiculo => vehiculo.placa === placa)
    if (vehiculoBuscado  == undefined)
    return `El vehiculo con placa ${placa}, no existe`;
  else
  return vehiculoBuscado
  }

  update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    return `This action updates a #${id} vehiculo`;
  }

  remove(placa: string) {
    const indice = this.vehiculo.findIndex(vehiculo => vehiculo.placa === placa)
    if(indice === -1)
      return `El vehiculo con placa: ${placa}, No existe`
    else{
      this.vehiculo.splice(indice,1)
    }
    return `El vehiculo con placa: ${placa}, fue elimidado`;
  }
}
