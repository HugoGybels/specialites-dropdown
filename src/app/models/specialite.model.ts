export class Specialite {
  id: number;
  libelleCourt: string;
  libelleLong: string;

  constructor(id, libelleCourt, libelleLong) {
    this.id = id;
    this.libelleCourt = libelleCourt;
    this.libelleLong = libelleLong;
  }
}