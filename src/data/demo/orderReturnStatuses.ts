import FakerOrderReturnStatus from '@data/faker/orderReturnStatus';

export default {
  waitingForConfirmation: new FakerOrderReturnStatus({
    id: 1,
    name: 'Waiting for confirmation',
  }),
  waitingForPackage: new FakerOrderReturnStatus({
    id: 2,
    name: 'Waiting for package',
  }),
  packageReceived: new FakerOrderReturnStatus({
    id: 3,
    name: 'Package received',
  }),
  returnDenied: new FakerOrderReturnStatus({
    id: 4,
    name: 'Return denied',
  }),
  returnCompleted: new FakerOrderReturnStatus({
    id: 5,
    name: 'Return completed',
  }),
};
