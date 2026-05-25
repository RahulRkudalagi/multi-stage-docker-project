# Metrics Comparison

Compare Normal and Optimized images by measuring the following:

Image size: run docker images after building both images to compare sizes.

Startup time: measure time to become responsive (simple curl loop or time wrapper).

Memory usage: use docker stats locally or `kubectl top` when running in cluster.

Follow the steps in docs/setup-guide.md to build images and record values here for presentation.
