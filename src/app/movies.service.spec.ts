import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { of } from 'rxjs';

describe('MoviesService', () => {
  let service: MoviesService;
  const mockHttpClient = jasmine.createSpyObj('HttpClient', 
  {'get': of({})});

beforeEach(() => {
  mockHttpClient.get.calls.reset();
  service = new MoviesService(mockHttpClient)
});

it('should be created', () => {
  expect(service).toBeTruthy();
});

it('should call httpClient on get with correct parameters', () => {
  const dummyImdbID = 'tt123';
  service.get(dummyImdbID);
  expect(mockHttpClient.get).toHaveBeenCalled();
  expect(mockHttpClient.get).toHaveBeenCalledWith(MoviesService.API_URI + '/?i='+ dummyImdbID + '&apiKey='+ MoviesService.API_KEY)
});

it('should call httpClient on search with correct parameters', () => {
  const searchTerm = 'sample';
  service.search(searchTerm);
  expect(mockHttpClient.get).toHaveBeenCalled();
  expect(mockHttpClient.get).toHaveBeenCalledWith(MoviesService.API_URI + '/?s='+ searchTerm + '&apiKey='+ MoviesService.API_KEY)
});

it('should call httpClient on search with default term when no other term is specified', () => {
  const defaultSearchTerm = 'Terminator';
  service.search();
  expect(mockHttpClient.get).toHaveBeenCalled();
  expect(mockHttpClient.get).toHaveBeenCalledWith(MoviesService.API_URI + '/?s='+ defaultSearchTerm + '&apiKey='+ MoviesService.API_KEY)
});

});
