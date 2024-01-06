import dataTestId from '@/tests/data-test';
import { fakeFullTypeData } from '@/utils/testUtils/fakes/docsScheme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import RenderListItem from './RenderListItem';

describe('Render ListItem with fake data', () => {
  it('user open list item', async () => {
    const user = userEvent.setup();
    render(<RenderListItem data={fakeFullTypeData} />);
    const listItem = screen.getByTestId(dataTestId.documentationListItem);
    await user.click(listItem);

    const listItemField = screen.getByTestId(dataTestId.documentationListItem);
    const listItemInputValue = screen.getByTestId(
      dataTestId.documentationListItem
    );
    const listItemEnumValue = screen.getByTestId(
      dataTestId.docsListItemEnumValue
    );
    expect(listItemField).toBeInTheDocument();
    expect(listItemInputValue).toBeInTheDocument();
    expect(listItemEnumValue).toBeInTheDocument();
  });
});
