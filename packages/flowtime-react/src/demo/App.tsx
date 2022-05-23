import React, { useCallback, useState } from 'react';
import { Root, Button, Panel, Text } from '@qxuken/lcars-ui';
import { FullLayout, FlowtimeServiceController, FlowtimeUI } from '../main';
import './app.css';
import { CompactLayout } from '../components';

enum Layout {
  UIWithProvider,
  Full,
  Compact,
}

export function App(): JSX.Element {
  const [layout, setLayout] = useState(Layout.UIWithProvider);
  const onLayoutChange = useCallback((layout: Layout) => () => setLayout(layout), []);
  return (
    <div className={Root.root}>
      <div className="demo-card">
        <Text as="h2">layout:</Text>
        <Panel minWidth>
          <Button
            bgColor={layout === Layout.UIWithProvider ? 'color4' : undefined}
            onClick={onLayoutChange(Layout.UIWithProvider)}
            width="min10"
          >
            ui with provider
          </Button>
          <Button
            bgColor={layout === Layout.Full ? 'color4' : undefined}
            onClick={onLayoutChange(Layout.Full)}
          >
            Full
          </Button>
          <Button
            bgColor={layout === Layout.Compact ? 'color4' : undefined}
            onClick={onLayoutChange(Layout.Compact)}
          >
            Compact
          </Button>
        </Panel>
        {layout === Layout.UIWithProvider && (
          <FlowtimeServiceController
            config={{
              minimumActivityDurationMinutes: 4,
            }}
          >
            <FlowtimeUI />
          </FlowtimeServiceController>
        )}
        {layout === Layout.Full && <FullLayout />}
        {layout === Layout.Compact && <CompactLayout />}
      </div>
    </div>
  );
}
