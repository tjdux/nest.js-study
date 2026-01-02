import { Router } from "express";
import {
  createACat,
  deleteACatById,
  fetchAllCats,
  fetchCatById,
  updateAWholeCat,
  updatePartialCat,
} from "cats/cats.service";

const router = Router();

// READ 고양이 전체 데이터 조회 -> GET
router.get("/cats", fetchAllCats);

// READ 특정 고양이 데이터 조회 -> GET
router.get("/cats/:id", fetchCatById);

// CREATE 새로운 고양이 추가 -> POST
router.post("/cats", createACat);

// UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", updateAWholeCat);

// UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch("/cats/:id", updatePartialCat);

// DELETE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", deleteACatById);

export default router;
