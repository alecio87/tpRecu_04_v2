import { Request, Response } from "express";
import { User } from "../entity/User";
import { Perfil } from "../entity/Perfil";

export const getPerfiles = async (req: Request, res: Response) => {
  try {
    const perfiles = await Perfil.find({ relations: ["user"] });
    const mappedPerfiles = perfiles.map((perfil) => ({
      idPerfil: perfil.id,
      nombre: perfil.nombre,
      apellido: perfil.apellido,
      dni: perfil.dni,
      genero: perfil.genero,
      direccion: perfil.direccion,
      ciudad: perfil.ciudad,
      pais: perfil.pais,
      celular: perfil.celular,
      foto: perfil.foto,
      user: {
        idUser: perfil.user.id,
        email: perfil.user.email,
      },
    }));

    return res.json(mappedPerfiles);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getPerfil = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const perfil = await Perfil.findOne({
      where: { id: parseInt(id) },
      relations: ["user"],
    });

    if (!perfil) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }

    const mappedPerfil = {
      idPerfil: perfil.id,
      nombre: perfil.nombre,
      apellido: perfil.apellido,
      dni: perfil.dni,
      genero: perfil.genero,
      direccion: perfil.direccion,
      ciudad: perfil.ciudad,
      pais: perfil.pais,
      celular: perfil.celular,
      foto: perfil.foto,
      user: {
        idUser: perfil.user.id,
        email: perfil.user.email,
      },
    };

    return res.json(mappedPerfil);

    return res.json(perfil);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createPerfil = async (req: Request, res: Response) => {
  try {
    const perfilData = req.body;
    const { id } = req.params;

    const user = await User.findOne({
      where: { id: parseInt(id) },
      relations: ["perfil"],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Crear el nuevo perfil y asociarlo al usuario
    const nuevoPerfil = new Perfil();
    nuevoPerfil.nombre = perfilData.nombre;
    nuevoPerfil.apellido = perfilData.apellido;
    nuevoPerfil.dni = perfilData.dni;
    nuevoPerfil.genero = perfilData.genero;
    nuevoPerfil.direccion = perfilData.direccion;
    nuevoPerfil.ciudad = perfilData.ciudad;
    nuevoPerfil.pais = perfilData.pais;
    nuevoPerfil.celular = perfilData.celular;
    nuevoPerfil.foto = perfilData.foto;

    // Asociar el perfil al usuario
    nuevoPerfil.user = user;
    await nuevoPerfil.save();

    const mappedPerfil = {
      idPerfil: nuevoPerfil.id,
      nombre: nuevoPerfil.nombre,
      apellido: nuevoPerfil.apellido,
      dni: nuevoPerfil.dni,
      genero: nuevoPerfil.genero,
      direccion: nuevoPerfil.direccion,
      ciudad: nuevoPerfil.ciudad,
      pais: nuevoPerfil.pais,
      celular: nuevoPerfil.celular,
      foto: nuevoPerfil.foto,
      user: {
        idUser: user.id,
        email: user.email,
      },
    };

    return res.status(201).json(mappedPerfil);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updatePerfil = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const perfilData = req.body;

    const perfil = await Perfil.findOne({
      where: { id: parseInt(id) },
    });

    if (!perfil) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }

    // Actualizar los campos del perfil con los nuevos datos
    perfil.nombre = perfilData.nombre || perfil.nombre;
    perfil.apellido = perfilData.apellido || perfil.apellido;
    perfil.dni = perfilData.dni || perfil.dni;
    perfil.genero = perfilData.genero || perfil.genero;
    perfil.direccion = perfilData.direccion || perfil.direccion;
    perfil.ciudad = perfilData.ciudad || perfil.ciudad;
    perfil.pais = perfilData.pais || perfil.pais;
    perfil.celular = perfilData.celular || perfil.celular;
    perfil.foto = perfilData.foto || perfil.foto;

    // Guardar los cambios en la base de datos
    await perfil.save();
    const mappedPerfil = {
      idPerfil: perfil.id,
      nombre: perfil.nombre,
      apellido: perfil.apellido,
      dni: perfil.dni,
      genero: perfil.genero,
      direccion: perfil.direccion,
      ciudad: perfil.ciudad,
      pais: perfil.pais,
      celular: perfil.celular,
      foto: perfil.foto,
    };

    return res.status(200).json(mappedPerfil);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deletePerfil = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const perfil = await Perfil.findOne({
      where: { id: parseInt(id) },
    });

    if (!perfil) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }

    await Perfil.remove(perfil);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
