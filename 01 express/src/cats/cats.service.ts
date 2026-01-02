import { Request, Response } from "express";
import { Cat } from "cats/cats.model";

export const fetchAllCats = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({ success: true, data: cats });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const fetchCatById = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({ success: true, data: cat });
  } catch (error) {
    res.status(400).send({ success: false, error: (error as Error).message });
  }
};

export const createACat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    res.status(400).send({ success: false, error: (error as Error).message });
  }
};

export const updateAWholeCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      cat: result,
    });
  } catch (error) {
    res.status(400).send({ success: false, error: (error as Error).message });
  }
};

export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      cat: result,
    });
  } catch (error) {
    res.status(400).send({ success: false, error: (error as Error).message });
  }
};

export const deleteACatById = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      cat: newCat,
    });
  } catch (error) {
    res.status(400).send({ success: false, error: (error as Error).message });
  }
};
