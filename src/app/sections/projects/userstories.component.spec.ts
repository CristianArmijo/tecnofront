import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProjectsService } from 'src/app/models/services/projects.service';
import { environment } from 'src/environments/environment';

describe('Verificación del componente UserStories', () => {
    let projectsService: ProjectsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                ProjectsService
            ],
        });

        projectsService = TestBed.get(ProjectsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it(`Petición hacia la API que obtiene los proyectos`, async(inject([HttpTestingController, ProjectsService],
        (httpClient: HttpTestingController, projectsService: ProjectsService) => {

            let params = {
                userId: 1
            };
            projectsService.getUserProjects(params)
                .subscribe((posts: any) => {
                    expect(posts.length).toBe(params.userId);
                });

            let req = httpMock.expectOne(environment.PATH_tecnoandinaapi + '/api/v1/projects?member=' + params.userId);
            expect(req.request.method).toBe("GET");
            
        })));


    it(`Petición hacia la API que obtiene las historias de usuario`, async(inject([HttpTestingController, ProjectsService],
        (httpClient: HttpTestingController, projectsService: ProjectsService) => {

            let params = {
                projectId: 1
            };
            projectsService.getUserStories(params)
                .subscribe((posts: any) => {
                    expect(posts.length).toBe(params.projectId);
                });

            let req = httpMock.expectOne(environment.PATH_tecnoandinaapi + '/api/v1/userstories?project=' + params.projectId);
            expect(req.request.method).toBe("GET");

        })));

});