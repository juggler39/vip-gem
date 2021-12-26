import { mount } from '@vue/test-utils';
import About from '@/components/training/ClassComponent.vue';

describe('ClassComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(About, {});
    const message = wrapper.find('[data-testid="hello"]').text();
    expect(message).toMatch('Hello World');
  });
});
