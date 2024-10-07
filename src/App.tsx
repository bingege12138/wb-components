import { Button } from 'wb-components';

import Test from '@/Test';

const App = () => {
  return (
    <>
      <Button
        onClick={() => {
          console.log(123);
        }}
      >
        python
      </Button>
      <Test></Test>
    </>
  );
};

export default App;
