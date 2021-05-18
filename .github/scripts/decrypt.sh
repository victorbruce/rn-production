#!/bin/sh

# Decrypt the file
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$KEYS_KEYSTORE_PASSPHRASE" \
--output android/app/release-key.keystore android/app/release-key.keystore.gpg

gpg --quiet --batch --yes --decrypt --passphrase="$KEYS_KEYSTORE_PASSPHRASE" \
--output fastlane/keys.properties fastlane/keys.properties.gpg