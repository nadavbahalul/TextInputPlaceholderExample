import React from 'react';
import {SafeAreaView, TextInput, Button} from 'react-native';

const placeholderA = 'xxx';
const placeholderB = 'yyy';

const App = () => {
  const [placeholder, setPlaceholder] = React.useState(placeholderA);

  const swapPlaceholder = () => {
    setPlaceholder(placeholder !== placeholderA ? placeholderA : placeholderB);
  };

  return (
    <SafeAreaView>
      <TextInput defaultValue="123" placeholder={placeholder} />
      <Button title="Press to swap the placeholder" onPress={swapPlaceholder} />
    </SafeAreaView>
  );
};

export default App;
