import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDahsboardContext } from '../pages/DashboardLayout';

function SmallSidebar() {
  const data = useDahsboardContext();
  console.log(data);

  return <Wrapper>SmallSidebar</Wrapper>;
}
export default SmallSidebar;
