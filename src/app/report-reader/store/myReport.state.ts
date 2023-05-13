import { MyReportModel } from './../shared/myReport.model';

export interface CourseState {
    reports: MyReportModel[];
    isLoadingCourses: boolean;
    selectedCourse: any;
    error: any;
    //courseLessons: Lesson[];
}

export const courseInitialState: CourseState = {
    reports: [
{name: "A", email: "xyz",description:"fdsf",displayName:"sdsadas",id:0}

],
    isLoadingCourses: true,
    selectedCourse: null,
    error: null,
    //courseLessons: null
}