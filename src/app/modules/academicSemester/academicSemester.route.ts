import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.get('/', AcademicSemesterController.getAllSemester);
router.get('/:id', AcademicSemesterController.getSingleSemester);
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  AcademicSemesterController.updateSemester
);
router.delete('/:id', AcademicSemesterController.deleteSemester);
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.createSemester
);

export const AcademicSemesterRoutes = router;
