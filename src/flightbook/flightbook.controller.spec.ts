import { Test, TestingModule } from '@nestjs/testing';
import { FlightbookController } from './flightbook.controller';

describe('FlightbookController', () => {
  let controller: FlightbookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightbookController],
    }).compile();

    controller = module.get<FlightbookController>(FlightbookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
