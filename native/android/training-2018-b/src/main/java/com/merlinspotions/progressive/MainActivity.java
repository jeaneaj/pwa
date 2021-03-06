package com.merlinspotions.progressive;

import android.os.Bundle;

import com.mobify.astro.AstroActivity;
import com.mobify.astro.AstroWorker;

public class MainActivity extends AstroActivity {
    protected AstroWorker worker;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Create the initial worker.
        worker = new AstroWorker(this, pluginManager, eventManager, messageSender);
    }
}
