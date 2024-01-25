import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const createSemester = async (req: any): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    '/academic-semesters/create-semester',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllSemester = async (req: any): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-semesters', {
    params: req.query
  });
  return response;
};
const getSingleSemester = async (req: any): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.get(`/academic-semesters/${id}`, req.body);
  return response;
};
const updateSemester = async (req: any): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.patch(
    `/academic-semesters/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const deleteSemester = async (req: any): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.delete(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester
};
